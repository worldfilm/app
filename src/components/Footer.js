import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/Footer.scss';
// import AppFooter from './AD/AppFooter.js'
import {network} from '../config/config.js'
const List = [
  {
    name:'isShowAV',
    title: 'AV',
    className:"icon iconfont icon-shipin"
  },
  {
    name:'isShowVideo',
    title: '视频',
    className:"icon iconfont icon-shipin1"
  },
  {
    name:'isShowList',
    title: '分类',
    className:"icon iconfont icon-fenlei"
  },
  {
    name:'isShowFavor',
    title: '收藏',
    className:"icon iconfont icon-shoucang1"
  },{
    name:'isShowUser',
    title: '我的',
    className:"icon iconfont icon-wode"
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
         this.setState({ADlist: data})
      }
    })
  }
  componentDidMount(){
     this.getAd()
  }
  render() {
    let  ADlist= this.state.ADlist;
    const { choose=()=>{}  } = this.props;
    return (
      <div className='Footer'>
        <div className="AppFooter">
        {
          ADlist.map((item,index)=>(
            <a href={item.url} target="_blank" key={index}>
              <img src={item.img_url}/>
            </a>
          ))
        }
        </div>
        <div className="list">
          <ul>
            {
              List.map((item,index)=>(
                <li className="" key={index} onClick={()=>choose(index)}>
                  <i className={item.className}></i>
                  <span>{item.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      );
    };
  }
