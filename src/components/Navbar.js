import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Navbar.scss';
const LIST_ITEMS = [
  {
    name:'Home',
    title: '首页',
    className:"fas fa-home"
  },
  {
    name:'Hot',
    title: '热门',
    className:"fas fa-video"
  },
  {
    name:'VideoList',
    title: '标签',
    className:"fas fa-tags"
  },
  {
    name:'User',
    title: '用户',
    className:"far fa-user"
  },
]
export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { choose=()=>{}  } = this.props;
    return (<div className = "navbar">
               <ul>
               {
                 LIST_ITEMS.map((list, idx) => (
                   <li key={idx} onClick={()=>choose(list.name)}><i className ={list.className} ></i><span>用户</span></li>
                 ))
               }
               </ul>
           </div>);
    };
  }
