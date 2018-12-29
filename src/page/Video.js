import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Video.scss';
import Header from '../components/Header.js'
import VideoList from '../components/VideoList.js'
export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
        idx:1,
        sendId:7
    }
  }
  //头部导航条点击
  headClick(id){
    // console.log(id+"--headC")
    this.setState({sendId:id})
  }
  componentDidMount(){
  }
  render() {
    const {idx,sendId}=this.state
    return (
      <div className = "Video">
        <Header headClick={(id)=>this.headClick(id)} idx={idx}/>
        <VideoList sendId={sendId}/>
      </div>
  )};
}
