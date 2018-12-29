import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/List.scss';
import VideoList from '../components/VideoList.js'
import Header from '../components/Header.js'
import Actor from '../components/Actor.js'
import CategoryList from '../components/CategoryList.js'
import MoreVideo from '../components/MoreVideo.js'
import Navbar from '../components/Navbar.js'
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendId:0,
      idx:2,
      listId:null,
      name:'',
    }
  }
  GoBack(data){
    console.log(data)
  }
  //头部导航条点击
  headClick(id){
    // console.log(id+"--List")
    this.setState({sendId:id})
  }
  getId(id,name){
    // console.log(id+"--getId")
    this.setState({listId:id})
    this.setState({sendId:id})
    this.setState({name:name})
  }
  render() {
      const {idx,sendId,listId,name}=this.state
      return (
        <div className = "List">
           {listId?<Navbar name={name} GoBack={()=>this.GoBack()}/>:<Header headClick={(id)=>this.headClick(id)} idx={idx}/>}
           {sendId==0?<Actor/>:null}
           {sendId==1?<CategoryList sendId={sendId} sendListId={(id,name)=>this.getId(id,name)}/>:null}
           {sendId==2?<CategoryList sendId={sendId} sendListId={(id,name)=>this.getId(id,name)}/>:null}
           {listId?<MoreVideo sendId={sendId}/>:null}
        </div>
      )
  }
}
