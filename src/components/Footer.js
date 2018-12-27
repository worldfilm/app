import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/Footer.scss';
// import AppFooter from './AD/AppFooter.js'
import {network} from '../config/config.js'
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
        ADlist:[],
    }
  }
  getAd(){
    network('/api/advert/list?cate_code=AppFooter',null, res => {
      if (res.status == 0) {
         let data=res.data
     for(var item in data){
       // console.log(data[item])
       this.setState({ADlist: data[item]})
     }
      }
    })
  }
  componentDidMount(){
     this.getAd()
     // console.log(this)
  }
  render() {
    let  ADlist= this.state.ADlist;
    let randerHtml = [];
     console.log(ADlist)
    return (
      <div className='Footer'>
        <div className="AppFooter">
        <a href={ADlist.url} target="_blank">
          <img src={ADlist.img_url}/>
        </a>
        </div>
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
