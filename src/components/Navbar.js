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
                   <li><i className ="" ></i><span>用户</span></li>
                   <li><i className ="" ></i><span>用户</span></li>
                   <li><i className ="" ></i><span>用户</span></li>
               </ul>
           </div>);
    };
  }
