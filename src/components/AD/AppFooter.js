import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import {network} from './config/config.js';
export default class AppFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
        ADlist:[],
    }
  }
  getAd(){
    network('/api/advert/list?cate_code=AppFooter',null, res => {
      if (res.status == 0) {
        this.setState({ADlist: res.data})
      }
    })
  }
  componentDidMount(){
     this.getAd()
     // console.log(this)
  }
  // test() {
  //   network('/api/user/register/pc', {username: 'snake', password: 'aaa123'},data=>{
  //     console.log(data)
  //   })
  // }
  // componentDidMount(){
  //    // this.test()
  // }
  render() {
    const {ADlist} = this.state;
    return (
      <div className="AppFooter">
          <a href={ADlist.url} target="_blank">{ADlist.title}
            <img src={ADlist.img_url}/>
          </a>
      </div>
    );
    };
  }
