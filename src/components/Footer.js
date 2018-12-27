import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/Footer.scss';
import AppFooter from './AD/AppFooter.js'

const List = [
  {
    name:'isShowHome',
    title: 'AV',
    className:"fas fa-home"
  },
  {
    name:'isShowHot',
    title: '视频',
    className:"fas fa-video"
  },
  {
    name:'isShowVideoList',
    title: '分类',
    className:"fas fa-tags"
  },
  {
    name:'isShowUser',
    title: '收藏',
    className:"far fa-user"
  },{
    name:'isShowUser',
    title: '我的',
    className:"far fa-user"
  },
]
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        ADlist:'',
    }
  }
  componentDidMount(){
  }
  render() {
    const {ADlist} = this.state;
    return (
      <div className='Footer'>
        <AppFooter/>
        <div className="list">
        {
          List.map((item,index)=>(
            <a className="" key={index}>
              <i className={item.className}></i>
              <span>{item.title}</span>
            </a>
          ))
        }
        </div>
      </div>
      );
    };
  }
