import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Video.scss';
import VideoList from '../components/VideoList.js'
export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexId:7
    }
  }
  componentDidMount(){
  }
  render() {
    const {sendId}=this.props
    const {indexId}=this.state
    return (
      <div className = "Video">
         <VideoList sendId={sendId} indexId={indexId}/>
      </div>
  )};
}
