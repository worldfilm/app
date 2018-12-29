import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { choose=()=>{}  } = this.props;
    return (<div className = "Navbar">
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
