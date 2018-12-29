import axios from 'axios'
const ip='http://webvideo.6fg645fsd.com'
const network = function(url, data, fun) {
  let ip='http://webvideo.6fg645fsd.com'
  // let ip='http://192.168.0.106/video_web/public'
    // let ip='http://192.168.0.111'
  // let ip='http://192.168.0.110:3000'
  if(data){
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['X-Requested-With']='XMLHttpRequest';
    axios.post(ip+url,data,fun).then(res=>{
         fun(res.data)
    }).catch(err=>{
         fun(err)
         console.log('posterror')
    });
  }else{
    axios.get(ip+url,null,fun).then(res=>{
         fun(res.data)
         // console.log('getxxxxxxxx')
    }).catch(err=>{
         fun(err)
         console.log('geterror')
    });
  }
}
export {
  network,ip
}
