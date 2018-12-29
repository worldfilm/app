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
    network('/mapi/category/getvediolist?vadioClass='+sendId,null, res => {
       if (res.status == 0) {
         let list=res.data
         this.setState({list:list})
      }
    })
  }
  componentWillMount(){
      const {sendId}=this.props
      this.getList(sendId)
  }
 componentWillReceiveProps(data) {
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
