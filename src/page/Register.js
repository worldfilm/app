import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Logoin.scss';
export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      verifycode: null,
      logintex: null,
      data: {},
      disable: 'disable',
      chose: true,
      texusername: null,
      texpassword: null,
    }
  }
  checkd() {
    this.chose ? (this.chose = false) : (this.chose = true);
  },
  btnRegister() {
    let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
    let userReg = /^[a-zA-Z0-9]{6,12}$/;
    let nickReg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,8}$/;
    let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
    let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!userReg.test(this.username)) {
      this.texusername = "请检查您输入的用户名~";
      this.texpassword = null;
      this.texconfirmPassword = null;
      this.texemail = null;
    } else if (!pwdReg.test(this.password)) {
      this.texusername = null;
      this.texpassword = "请检查您输入的密码~";
      this.texconfirmPassword = null;
      this.texemail = null;
    } else if (this.password != this.confirmPassword) {
      this.texusername = null;
      this.texpassword = null;
      this.texconfirmPassword = "两次输入的密码不一致~";
      this.texemail = null;
    } else if (!emailReg.test(this.email)) {
      this.texusername = null;
      this.texpassword = null;
      this.texconfirmPassword = null;
      this.texemail = "请检查您输入的邮箱~";
    } else {
      if (this.chose) {
        network('/api/user/register/pc', {
          username: this.username,
          email: this.email,
          password: this.password,
        }, data => {
          console.log(data)
          if (data.status == 0) {
            this.tex = data.message;
            sessionStorage.setItem('TOKEN_KEY', data.data.api_token)
            sessionStorage.setItem('username', data.data.username)
            sessionStorage.setItem('email', data.data.email)
            sessionStorage.setItem('psw', this.password)
            sessionStorage.setItem('imgsrc', this.avatar)
            Hub.$emit('ShowLog', false);
            Hub.$emit('ShowOnline', true);
            Hub.$emit('username', data.data.username);
            this.$router.push({
              path: '/Home'
            })
          }
        })
      } else {
        this.tex = "不勾选表示不同意网站协议，不能注册！";
      }
    }
    if (!this.username) {
      this.texusername = "用户名不得为空!";
      this.texpassword = null;
      this.texconfirmPassword = null;
      this.texemail = null;
    } else if (!this.password) {
      this.texusername = null;
      this.texpassword = "密码不得为空!";
      this.texconfirmPassword = null;
      this.texemail = null;
    } else if (this.confirmPassword == '' || this.confirmPassword == null) {
      this.texusername = null;
      this.texpassword = null;
      this.texconfirmPassword = "请再次输入密码!";
      this.texemail = null;
    } else if (!this.email) {
      this.texusername = null;
      this.texpassword = null;
      this.texconfirmPassword = null;
      this.texemail = "邮箱不得为空!";
    }
  }
  render() {
    return (<div className = "Register">
              <div class="register-pop ">
                <div class="left-m"></div>
                <div class="register-pop-container">
                  <div class="login-title">视频通行证注册</div>
                  <div class="register-pop-content">
                    <form role="form" id="signUpForm" novalidate="novalidate">
                      <div class="form-group">
                        <label for="username">用户名</label>
                        <input type="text" class="form-control" id="register_username" name="username" placeholder="登录名为4-12位字母或数字" v-model='username'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texusername'></label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="register_password" name="password" placeholder="密码为6-12位字母或数字" v-model='password'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texpassword'></label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="confirmPassword">确认密码</label>
                        <input type="password" class="form-control" id="register_confirmPassword" name="confirmPassword" placeholder="请再次输入密码" v-model='confirmPassword'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texconfirmPassword'></label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="username">邮件</label>
                        <input type="text" class="form-control" id="register_nickname" name="email" placeholder="邮箱格式为xx@xx.xxx" v-model='email'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texemail'></label>
                        </div>
                      </div>
                      <!-- <div class="form-group">
                        <label for="verifycode">验证码</label>
                        <input type="text" class="form-control" id="register_verifycode" name="verifycode" placeholder="右侧图片字母和数字" maxlength="4" style="width:200px;" v-model='verifycode'>
                        <a class="input-group-addon vimg" href="Javascript:;" @click='VerifyCode'>
                          <img class="verify-img" src="../../static/VerifyCode.png" alt="点击刷新" width="100" height="26" >
                        </a>
                      </div> -->
                      <p class="sure">
                        <label for="over18" style="font-weight:normal">
                              <input @click='checkd' v-model='chose'  class="form-check-input"  type="checkbox">我已经满18周岁?
                        </label>
                      </p>
                      <p class="sure">
                        <label for="over18" style="font-weight:normal">
                              <input @click='checkd' v-model='chose'  class="form-check-input"  type="checkbox">我同意<a class="condition" @click='condition'>《条款及条件》</a>
                        </label>
                      </p>
                      <p class="warn" v-text='tex'></p>
                      <p class="butn"><button type="button" class="btn signUpBtn" id="btnRegister" @click='btnRegister' :disable='disable'>注&nbsp;&nbsp;册</button></p>
                    </form>
                  </div>
                </div>
              </div>
           </div>);
    };
  }
