import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './scss/Body.scss';
export default class Body extends Component {

  render() {
    return (<div className = "container">
                   <Header  choose={(name)=>this.handClickf(name)}/>
                   {

                   }
                   <Footer/>
            </div>);
    };
  }
