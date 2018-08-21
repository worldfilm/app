import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Logoin.scss';
export default class Logoin extends Component {
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
  btnLogin() {
    let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
    let userReg = /^[a-zA-Z0-9]{6,12}$/;
    let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
    let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!userReg.test(this.username)) {
      this.texusername = "请检查您输入的用户名~";
      this.texpassword = null;
    } else if (!pwdReg.test(this.password)) {
      this.texusername = null;
      this.texpassword = "请检查您输入的密码~";
    } else {
      if (this.chose) {
        this.texusername = null;
        this.texpassword = null;
        network('/api/user/login/pc', {
          username: this.username,
          password: this.password,
        }, data => {
          this.logintex = data.message;
          if (data.status == 0) {
            console.log(data.data)
            Hub.$emit('ShowLog', false);
            Hub.$emit('ShowOnline', true);
            Hub.$emit('username', data.data.username);
            sessionStorage.setItem('TOKEN_KEY', data.data.api_token)
            sessionStorage.setItem('username', data.data.username)
            sessionStorage.setItem('email', data.data.email)
            sessionStorage.setItem('psw', this.password)
            sessionStorage.setItem('imgsrc', this.avatar)
            this.$router.push({
              path: '/Home'
            })
          }
        })
      } else {
        this.logintex = "不勾选表示不同意网站协议，不能注册！";
      }
    }
    if (!this.username) {
      this.texusername = "用户名不得为空!";
      this.texpassword = null;
    } else if (!this.password) {
      this.texusername = null;
      this.texpassword = "密码不得为空!";
    }
  }
  render() {
    return (<div className = "Logoin">
              <div class="register-pop ">
                <div class="left-m"></div>
                <div class="register-pop-container">
                  <div class="login-title">视频通行证登录
                  </div>
                  <div class="register-pop-content">
                    <form role="form" id="signUpForm" novalidate="novalidate">
                      <div class="form-group">
                        <label for="username">账户</label>
                        <input type="text" class="form-control" id="register_username" name="username" placeholder="请输入用户名或邮箱" v-model='username'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texusername'></label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="register_password" name="password" placeholder="请输入登录密码" v-model='password'>
                        <div class="text-danger">
                          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
                          <label name="name" class="" v-text='texpassword'></label>
                        </div>
                      </div>
                      <p class="sure">
                        <input @click='checkd' v-model='chose' class="form-check-input" type="checkbox" style="margin-right: 8px;">
                        <label for="over18" style="font-weight:normal">记住用户名</label>
                        <a>忘记密码？</a>
                      </p>
                      <p class="warn" v-text='logintex'></p>
                      <p class="butn"><button type="button" class="btn signUpBtn" id="btnRegister" @click='btnLogin' :disable='disable'>登&nbsp;&nbsp;录</button></p>
                      <p class="goregister"><span>还没有账户?</span><span @click="goregister" class="movetoregister">点此注册</span> </p>
                    </form>
                  </div>
                </div>
              </div>
           </div>);
    };
  }
