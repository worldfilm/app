import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/User.scss';
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowHome: true,
      isShowHot: false,
      isShowVideoList: false,
      isShowUser: false
    }
  }
  render() {
    return (<div className = "User">
                <ul>
                  <li><i className = ""></i><span>我的收藏</span></li>
                  <li><i className = ""></i><span>我的订单</span></li>
                  <li><i className = ""></i><span>浏览记录</span></li>
                  <li><i className = ""></i><span>VIP充值</span></li>
                  <li><i className = ""></i><span>安卓端下载</span></li>
                </ul>
                <p><span>注销</span></p>
            </div>);
    };
  }
