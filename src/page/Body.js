import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Home from '../page/Home.js'
import Hot from '../page/Hot.js'
import User from '../page/User.js'
import VideoList from '../page/VideoList.js'
import './scss/Body.scss';
export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowHome: true,
      isShowHot: false,
      isShowVideoList: false,
      isShowUser: false
    }
  }
  handClickf(idx) {
    this.setState({isShowHome: false});
    this.setState({isShowHot: false});
    this.setState({isShowUser: false});
    this.setState({isShowVideoList: false});
    idx == 0?this.setState({isShowHome: true}):null;
    idx == 1?this.setState({isShowHot: true}):null;
    idx == 2?this.setState({isShowUser: true}):null;
    idx == 3?this.setState({isShowVideoList: true}):null;
  }
  render() {
    const {isShowHome, isShowHot, isShowUser, isShowVideoList} = this.state;
    return (<div className="container">
      <Header choose={(idx) => this.handClickf(idx)}/>
      {isShowHome? (<Home/>): null}
      {isShowHot? (<Hot/>): null}
      {isShowVideoList? (<User/>): null}
      {isShowUser? (<VideoList/>): null}
      <Footer/>
    </div>);
  };
}
