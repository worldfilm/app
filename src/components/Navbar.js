import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { GoBack=()=>{},name} = this.props;
    return (<div className = "Navbar">
               <ul>
                   <li className ="left" onClick={()=>GoBack()}><i></i><span>{"<"}</span></li>
                   <li className ="title"><i></i><span>{name}</span></li>
                   <li className ="right"><i></i><span></span></li>
               </ul>
           </div>);
    };
  }
