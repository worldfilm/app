import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { GoBack=()=>{},name,NavbarIndex} = this.props;
    console.log(NavbarIndex)
    return (<div className = "Navbar">
               <ul>
                   <li className ="left" onClick={()=>GoBack(NavbarIndex)}><i></i><span>{"<"}</span></li>
                   <li className ="title"><i></i><span>{name}</span></li>
                   <li className ="right"><i></i><span></span></li>
               </ul>
           </div>);
    };
  }
