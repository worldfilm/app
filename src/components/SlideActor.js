import React, {Component,PropTypes} from 'react';
import {Link } from 'react-router';
import './scss/SlideActor.scss';
import VideoList from '../components/VideoList.js'
import Header from '../components/Header.js'
import Actor from '../components/Actor.js'
import CategoryList from '../components/CategoryList.js'
import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
const  charts= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default class SlideActor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendId:0,
      idx:2,
    }
  }
  componentDidMount(){
   var mySwiper = new Swiper('.swiper-container', {
     scrollbar: '.swiper-scrollbar',
     direction: 'horizontal',
     slidesPerView: 'auto',
     freeMode: true
   })
 }
  //头部导航条点击
  headClick(id){
    console.log(id+"--List")
    this.setState({sendId:id})
  }
  render() {
      const {idx,sendId}=this.state
      const {Search=()=>{}}=this.props
      return (
        <div className = "SlideActor">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" >
                <button className="item" style={{width:'2rem'}}>按字母查询</button>
                {
                  charts.map((item,index)=>(
                    <button className='item' key={index} onClick={()=>Search(item)}>{item}</button>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      )
  }
}
