import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Header.scss';
import Navbar from '../components/Navbar.js'
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isShowHome:true,
        isShowHot:false,
        isShowVideoList:false,
        isShowUser:false,
    }
  }
  handClickf(idx){
    console.log(idx+'/////////////')
    var i=0;
    if(idx==0){
      this.setState({isShowHome: true})
    }
    if(idx==1){
      this.setState({isShowHot: true})
    }
    if(idx==2){
      this.setState({isShowVideoList: true})
    }
    if(idx==3){
      this.setState({isShowUser: true})
    }
  }
  render() {
    return (<div className = "header">
               <div className = "container">
                  <div  className = "top">
                     <img src='/img/logo.png' />
                     <input/>
                     <button><i className ='fas fa-search'></i></button>
                     <img src='' />
                  </div>
                  <Navbar choose={(idx)=>this.handClickf(idx)}/>
               </div>
            </div>);
    };
  }
