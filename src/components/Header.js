import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Header.scss';
import Navbar from '../components/Navbar.js'
const LIST_ITEMS = [
  {
    name:'isShowHome',
    title: '首页',
    className:"fas fa-home"
  },
  {
    name:'isShowHot',
    title: '热门',
    className:"fas fa-video"
  },
  {
    name:'isShowVideoList',
    title: '标签',
    className:"fas fa-tags"
  },
  {
    name:'isShowUser',
    title: '用户',
    className:"far fa-user"
  },
]
export default class Header extends Component {
  render() {
    const { choose=()=>{}  } = this.props;
    return (<div className = "header">
               <div className = "container">
                  <div  className = "top">
                     <img src='/img/logo.png' />
                     <input/>
                     <button><i className ='fas fa-search'></i></button>
                     <img src='' />
                  </div>
                  <div className = "navbar">
                     <ul>
                     {
                       LIST_ITEMS.map((list, idx) => (
                         <li key={idx} onClick={()=>choose(idx)}><i className ={list.className} ></i><span>{list.title}</span></li>
                       ))
                     }
                     </ul>
                 </div>
               </div>
            </div>);
    };
  }
