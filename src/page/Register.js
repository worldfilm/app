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
  }
  btnRegister() {
     
  }
  render() {
    return (<div className = "Register">

           </div>);
    };
  }
