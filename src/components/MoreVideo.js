import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
// import './scss/Video.scss';
import VideoList from '../components/VideoList.js'
export default class MoreVideo extends Component {
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
    const {sendId}=this.props
    return (
      <div className = "MoreVideo">
        <VideoList sendId={sendId}/>
      </div>
  )};
}
