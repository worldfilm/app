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
      headIndex:2,
      listId:false,
      name:'',
      NavbarIndex:0,
    }
  }
  GoBack(data){
    console.log(data)
    this.setState({listId:false})
    this.setState({sendId:data})
  }
  //头部导航条点击
  headClick(id){
    // console.log(id+"--List")
    this.setState({sendId:id})
    this.setState({NavbarIndex:id})
  }
  getId(id,name){
    // console.log(id+"--getId")
    this.setState({listId:true})
    this.setState({sendId:id})
    this.setState({name:name})
  }
  render() {
      const {headIndex,sendId,listId,name,NavbarIndex}=this.state
      // console.log(NavbarIndex)
      return (
        <div className = "List">
           {listId?<Navbar name={name} GoBack={(data)=>this.GoBack(data)} NavbarIndex={NavbarIndex}/>:<Header headClick={(index)=>(this.headClick(index))} headIndex={headIndex}/>}
           {NavbarIndex==0?<Actor/>:null}
           {!listId&&NavbarIndex!=0?<CategoryList NavbarIndex={NavbarIndex} sendListId={(id,name)=>this.getId(id,name)}/>:null}
           {listId?<MoreVideo sendId={sendId}/>:null}
        </div>
      )
  }
}
