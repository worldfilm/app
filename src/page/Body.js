import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {network} from '../config/config.js'
import Footer from '../components/Footer.js'
import AV from '../page/AV.js'
import Video from '../page/Video.js'
import List from '../page/List.js'
import Favor from '../page/Favor.js'
import User from '../page/User.js'
import Logoin from '../page/Logoin.js'

import './scss/Body.scss';
export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowAV: true,
      isShowVideo: false,
      isShowList: false,
      isShowFavor: false,
      isShowUser: false,
      isShowLogoin:false,
      sendId:2,
      idx:0,
      videoList:[]
    }
  }
  //底部点击切换页面
  footNavClick(footerIndex) {
    // console.log(footerIndex+"--footerIndex")
    this.setState({isShowAV: false});
    this.setState({isShowVideo: false});
    this.setState({isShowList: false});
    this.setState({isShowFavor: false});
    this.setState({isShowUser: false});
    this.setState({isShowLogoin: false});
    footerIndex == 0?this.setState({isShowAV: true}):null;
    footerIndex == 1?this.setState({isShowVideo: true}):null;
    footerIndex == 2?this.setState({isShowList: true}):null;
    footerIndex == 3?this.setState({isShowFavor: true}):null;
    footerIndex == 4?(this.checkUser()):null;
    // this.setState({idx: idx});
  }
  checkUser(){
      this.setState({isShowUser: true});
      this.setState({isShowLogoin: false});
  }
  componentWillMount(){

  }
  render() {
    const {isShowAV, isShowVideo, isShowList, isShowFavor,isShowUser,isShowLogoin,idx,sendId,videoList} = this.state;
    return (<div className="container">
      {isShowAV? (<AV sendId={sendId} videoList={videoList}/>): null}
      {isShowVideo? (<Video sendId={sendId} videoList={videoList}/>): null}
      {isShowList? (<List />): null}
      {isShowFavor? (<Favor/>): null}
      {isShowUser? (<User/>): (<Logoin/>)}
      <Footer footNavClick={(footerIndex) => this.footNavClick(footerIndex)}/>
    </div>);
  };
}
