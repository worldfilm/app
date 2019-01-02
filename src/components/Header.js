import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/Header.scss';
import Navbar from '../components/Navbar.js'
const AVlist=[{id: 2, name: "黄金正片", thumb: "http://img.qxlsjw.com/appdev/fengmian/huangjinzhengpian.jpg"},
         {id: 3, name: "欧美专区", thumb: "http://img.qxlsjw.com/appdev/fengmian/oumei.jpg"},
         {id: 6, name: "日本无码", thumb: "http://img.qxlsjw.com/appdev/fengmian/boduoyejieyi.jpg"},
         {id: 13, name: "卡通动漫", thumb: "http://img.qxlsjw.com/appdev/fengmian/dongman.jpg"},
         {id: 16, name: "中文字幕", thumb: null}]
const VideoList=[{name: '最新更新',id: 7},{name: '最热视频',id: 9},{name: '自拍偷拍',id: 24}]
const TagList=[{name: '女优列表',id: 0},{name: 'AV分类',id: 1},{name: '视频分类',id: 2}]
const CollectList=[{name: '女优',id: 0},{name: 'AV',id: 1},{name: '视频',id: 2}]
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
        list:[],
        idx:0,
    }
  }


  render() {
    const { headClick=()=>{},headIndex} = this.props;
    let list
    headIndex==0?(list=AVlist):null
    headIndex==1?(list=VideoList):null
    headIndex==2?(list=TagList):null
    headIndex==3?(list=CollectList):null
    headIndex==4?(list=[]):null
    let myWidth=100/list.length+"%"
    return (<div className = "header">
                 <ul>
                     {
                       list.map((item, index) => (
                         <li className={this.state.idx==index?"active":""} id={item.id} key={index} onClick={()=>(headClick(item.id),this.setState({idx: index}))} style={{width:myWidth}}><span>{item.name}</span></li>
                       ))
                     }
                 </ul>
            </div>)
          }
  }
