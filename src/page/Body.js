import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
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
    }
  }
  //底部点击切换页面
  handClickf(idx) {
    // console.log(idx+"--Body")
    this.setState({isShowAV: false});
    this.setState({isShowVideo: false});
    this.setState({isShowList: false});
    this.setState({isShowFavor: false});
    this.setState({isShowUser: false});
    this.setState({isShowLogoin: false});
    idx == 0?this.setState({isShowAV: true}):null;
    idx == 1?this.setState({isShowVideo: true}):null;
    idx == 2?this.setState({isShowList: true}):null;
    idx == 3?this.setState({isShowFavor: true}):null;
    idx == 4?(this.checkUser()):null;
    this.setState({idx: idx});

  }
  //头部导航条点击
  headClick(id,index){
    this.setState({sendId:id,idx:index})
  }
  checkUser(){
      this.setState({isShowUser: true});
      this.setState({isShowLogoin: false});
  }
  componentDidMount(){

  }
  render() {
    const {isShowAV, isShowVideo, isShowList, isShowFavor,isShowUser,isShowLogoin,idx,sendId} = this.state;
    return (<div className="container">
      <Header headeClick={(id)=>this.headClick(id)} idx={idx} />
      {isShowAV? (<AV sendId={sendId}/>): null}
      {isShowVideo? (<Video sendId={sendId}/>): null}
      {isShowList? (<List/>): null}
      {isShowFavor? (<Favor/>): null}
      {isShowUser? (<User/>): (<Logoin/>)}
      <Footer choose={(idx) => this.handClickf(idx)}/>
    </div>);
  };
}
