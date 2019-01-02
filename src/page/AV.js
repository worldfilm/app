import React, {Component,PropTypes} from 'react';
import { createStore } from 'redux'
import {network} from '../config/config.js'
import {Link } from 'react-router';
import './scss/AV.scss';
import VideoList from '../components/VideoList.js'
import Header from '../components/Header.js'
export default class AV extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendId:2,
      headIndex:0,
    }
  }

  //头部导航条点击
  headClick(id){
    // console.log(id+"--headC")
    this.setState({sendId:id})
  }
  render() {
    const {headIndex,sendId}=this.state
    return (
      <div className = "AV">
        <Header headClick={(id)=>this.headClick(id)} headIndex={headIndex}/>
        <VideoList sendId={sendId}/>
      </div>
  )};
}
