import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import {network} from '../config/config.js';
export default class Logoin extends Component {

  test() {
    network('/api/user/register/pc', {username: 'snake', password: 'aaa123'},data=>{
      console.log(data)
    })
  }
  componentDidMount(){
     this.test()
  }
  render() {
    return (<div className = "Logoin">

           </div>);
    };
  }
