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
  getList(sendId){
    console.log(sendId)
    network('/mapi/category/getvediolist?vadioClass='+sendId,null, res => {
       if (res.status == 0) {
         let list=res.data
         this.setState({list:list})
         // console.log(list)
      }
    })
  }
  componentWillMount(){
      const {sendId}=this.props
      this.getList(sendId)
  }
 componentWillReceiveProps(data) {
      // this.getList(data.sendId)
 }
  render() {
    const {list}=this.state
    const {sendListId=()=>{}}=this.props
    console.log(list)
    return (
      <div className='CategoryList'>
        <ul>
        {
          list.map((item,index)=>(
            <li key={index}  onClick={()=>sendListId(item.id)}>
              <img src={item.thumb}/>
              <span className="name">{item.name}</span>
            </li>
          ))
        }
        </ul>
      </div>
    )}
  }
