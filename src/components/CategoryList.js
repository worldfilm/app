import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import '../components/scss/CategoryList.scss';
import {network} from '../config/config.js'
export default class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
        id:2
    }
  }
  getList(NavbarIndex){
    // console.log(NavbarIndex)
    network('/mapi/category/getvediolist?vadioClass='+NavbarIndex,null, res => {
       if (res.status == 0) {
         let list=res.data
         this.setState({list:list})
      }
    })
  }
  componentWillMount(){

  }
 componentWillReceiveProps(data) {
   const {NavbarIndex}=this.props
   this.getList(NavbarIndex)
 }
  render() {
    const {list}=this.state
    const {sendListId=()=>{}}=this.props
    return (
      <div className='CategoryList'>
        <ul>
        {
          list.map((item,index)=>(
            <li key={index}  onClick={()=>sendListId(item.id,item.name)}>
              <img src={item.thumb}/>
              <span className="name">{item.name}</span>
            </li>
          ))
        }
        </ul>
      </div>
    )}
  }
