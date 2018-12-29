import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/ActorList.scss';
import {network,ip} from '../config/config.js'
import SlideActor from './SlideActor.js'
export default class ActorList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList:[],
        id:2,
        name:'A',
        list:[],
    }
  }
  // Search(name){
  //   console.log(name)
  //   this.getList(name)
  // }
  // getList(name){
  //   network('/mapi/category/actorlist?name_first_char='+name,null, res => {
  //      if (res.status == 0) {
  //        let list=res.data
  //        this.setState({list:list})
  //     }
  //   })
  // }
  componentWillMount(){
    // let name=this.state.name
    //  this.getList(name)
  }
 componentWillReceiveProps(data) {
      // this.getList(data.sendId)
 }
  render() {
    const {list}=this.props
    console.log(network.id)
    return (
      <div className="ActorList">
        <ul>
            {
              list.map((item,index)=>(
                <li key={index}>
                  <img src={ip+item.local_head_url}/>
                  <div className="name">{item.name}</div>
                  <button></button>
                </li>
              ))
            }
        </ul>
      </div>
    )}
  }
