import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/VideoList.scss';
import {network} from '../config/config.js'
export default class VideoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList:[],
        id:2
    }
  }
  getList(id){
    network('/mapi/category/categorydetail?categoryid='+id+'&page=1&page_size=10',null, res => {
       if (res.status == 0) {
         let data=res.data
         let newlist=data.new
         let hotlist=data.hot
         this.setState({videoList:newlist})
      }
    })
  }
  componentWillMount(){
     this.getList(this.props.sendId)
  }
 componentWillReceiveProps(data) {
      this.getList(data.sendId)
 }
  render() {
    const {videoList}=this.state
    return (
      <div className='VideoList'>
        <ul>
            {
              videoList.map((item,index)=>(
                <li key={index}>
                    <img src={item.thumb_img_url}/>
                    <div className="time">
                       <span>{item.created_at}</span>
                    </div>
                    <div className="like">
                       <i className=""></i>
                    </div>
                    <div className="title">
                        <span>{item.title}</span>
                    </div>
                </li>
              ))
            }
        </ul>
      </div>
    )}
  }
