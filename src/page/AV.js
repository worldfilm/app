import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/AV.scss';
import VideoList from '../components/VideoList.js'

export default class AV extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexId:2
    }
  }
  componentDidMount(){
  }
  render() {
    const {sendId}=this.props
    const {indexId}=this.state
    return (
      <div className = "AV">
          <VideoList sendId={sendId} indexId={indexId}/>
      </div>
  )};
}
