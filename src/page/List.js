import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/List.scss';
import VideoList from '../components/VideoList.js'
export default class List extends Component {
  render() {
      const {sendId}=this.props
    return (<div className = "List">
     <VideoList sendId={sendId}/>
    </div>);
    };
  }
