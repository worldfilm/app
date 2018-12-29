import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/Actor.scss';
import {network} from '../config/config.js'
import SlideActor from './SlideActor.js'
import ActorList from './ActorList.js'
export default class Actor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList:[],
        id:2,
        name:'A',
        list:[],
    }
  }
  Search(name){
    console.log(name)
    this.getList(name)
  }
  getList(name){
    network('/mapi/category/actorlist?name_first_char='+name,null, res => {
       if (res.status == 0) {
         let list=res.data
         this.setState({list:list})
      }
    })
  }
  componentWillMount(){
    let name=this.state.name
     this.getList(name)
  }
 componentWillReceiveProps(data) {
      // this.getList(data.sendId)
 }
  render() {
    const {list}=this.state
    console.log(list)
    return (
      <div className='Actor'>
      <SlideActor Search={(name)=>this.Search(name)}/>
      <ActorList list={list}/>
      </div>
    )}
  }
