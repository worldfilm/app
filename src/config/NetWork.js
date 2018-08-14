// import version from '../version.js';
// import { AsyncStorage } from 'react-native';
// import MyAlert from '../components/util/MyAlert.js';
import {
  MyEmitter
} from '../../Lottery-Method-Config/lib/Emitter.js';
// import rc4 from '../../Lottery-Method-Config/lib/wowowowowo.js';
import './fetch.js';
var headKey = 'x-auth-token';
window.BestLove_Lotteries = 'BestLove_Lotteries';
window.Platform = ''
var env = window.ENV || 'production';
window.Device = 'MobileWeb';
window.REQUEST_HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
window.IMAGES_URL = window.CDNURL + './caipiaotupian/';
// window.Platform = rc4.decrypt('96a65f9a9c1583a4648ca6cf');
// window.Platform = 'iqicai'
// window.Platform = 'xingyunno1cp'



var path = ''; //本
//     path = rc4.decrypt("93a934dda563aaa672a7dec7988195f44741e92b3fdcc8d530e6c88ae2d087d43afa8802");  //100
// path = 'http://35.194.187.164/';//上
// path = 'http://13.114.122.60:83/';
(() => {
  path = window.initData.api_url;
  window.Platform = window.initData.agent;

  // if (env == 'localDev') {
  //    window.Platform = rc4.decrypt('96a65f9a9c1583a4648ca6cf');
  // path = rc4.decrypt("93a934dda563aaa672a7dec7988195f44741e92b3fdcc8d530e6c485");  //本
  // path = rc4.decrypt("93a934dda563aaa672a7dec7988195f44741e92b3fdcc8d530e6c88ae2d087d43afa8802"); //100
  // Platform = 'iqicai';
  // path = 'http://api.haowin.test2:84/';
  // }



  // window.Platform = 'lefttop';  //ben
  // path = 'http://xingyun.haowin.dev/apis/app/' //ben
  // }
  // if (env == 'dev') {
  //   window.Platform = window.initData.agent;
  //   // window.Platform = rc4.decrypt('96a65f9a9c1583a4648ca6cf');
  // path = rc4.decrypt("93a934dda563aaa672a7de889982e4f44768ba263fe2ead732e6cccbe0d0a596");  //预
  // }

  // if (window.location.hostname == rc4.decrypt('bcb52f988b73aea972b7cac69982e4f5476ab363')) {
  //   // path = rc4.decrypt('93a934dda563aaa672a7dec7988195f44741e92b3fdcc8d530e6c88ae2d087d43afa8802');
  // }

  // if (env == 'production') {

  // path = 'http://oppo.front-cdn.com:16888/';
  // path = 'http://35.194.187.164:16888/';
  // path = 'http://47.91.236.117:16888';
  // path = 'http://awsapi.front-cdn.com/';
  // }

})()


window.NetWork = {
  interfaceAction: {
    initPlatform: function() {
      var postData = {
        header: {
          method: 'default_index',
          device: this.device
        },
        data: {
          flag: 'init',
          platform: ''
        }
      }
      fetch(window.location.host + '/apis/app/', {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(postData)
      }).then((response) => {
        if (response.status === 204 || response.status === 200) {
          this.checkHead(response.headers);
          return response.text();
        } else {
          MyAlert('信息同步失败，请刷新浏览器');
        }
      }).then((responseText) => {
        var resp = JSON.parse(responseText)
        if (resp.header.errorCode === 0) {
          MyAlert('信息同成功，请继续操作');
        } else {
          MyAlert('信息同步失败，请刷新浏览器');
        }

      }).catch((err) => {
        MyAlert('信息同步失败，请刷新浏览器');
      })
    },
    setRequestHead: function(key, cb) {
      window.REQUEST_HEADER = Object.assign({}, window.REQUEST_HEADER, {
        [headKey]: key
      })
      if (typeof cb === 'function') cb();
    },
    saveHeadKey: function(key) {
      LocalStorage.save(headKey, key)
    },
    checkHead: function(header) {
      var key = header.get(headKey)
      if (!!key) {
        if (!REQUEST_HEADER[headKey]) {
          this.setRequestHead(key)
          this.saveHeadKey(key)
        }
      }
    },
    fetch(postData, cb) {
      fetch(path, {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(postData)
      }).then((response) => {
        if (response.status === 204 || response.status === 200) {
          this.checkHead(response.headers);
          return response.text();
        } else {
          cb(`网络错误,状态:${response.status}`, null)
        }
      }).then((responseText) => {
        if (!!responseText) {
          var resp = JSON.parse(responseText)
          if (resp.header.errorCode === 407) {
            MyEmitter.emitter('loginOut');
            // MyAlert('错误码407,需要重新登录')
          } else if (resp.header.errorCode === 507) {
            MyAlert('由于长时间没操作，信息同步中，请稍等...', 5000);
            this.initPlatform();
          } else {

            cb(null, resp)
          }
        } else {
          MyAlert('请求超时, 请重新刷新页面')
        }
      }).catch((err) => {
        MyAlert(err.message);
      })
    },
    POST: function(postData, cb) {
      if (!path) return cb('请求地址无效, 请刷新浏览器', null);
      postData.header = Object.assign({}, postData.header, {
        device: window.Device
      });
      if (!REQUEST_HEADER[headKey]) {
        this.initRequestHead(() => {
          this.fetch(postData, cb)
        })
      } else {
        this.fetch(postData, cb)
      }
    },
    SynPOST: function(postData, cb) {

      var http = new XMLHttpRequest();
      http.open('POST', path, false); // 同步请求
      Object.keys(REQUEST_HEADER).map((key) => {
        http.setRequestHeader(key, REQUEST_HEADER[key]);
      })
      http.send(JSON.stringify(postData));
      if (!!http.responseText) {
        var resp = null;
        try {
          resp = JSON.parse(http.responseText);
        } catch (e) {
          MyAlert('JSON解析出错')
        }
        if (!!resp) {
          cb(null, resp);
        } else {
          MyAlert('JSON解析出错');
        }
      } else {
        MyAlert('返回内容为空');
      }
    },
    initRequestHead: function(cb) {
      var key = LocalStorage.get(headKey);
      if (!!key) {
        this.setRequestHead(key, cb);
        // this.setRequestHead(localStorage[headKey], cb);
      } else {
        if (typeof cb === 'function') cb();
      }
    },
  },
  // init: function () {
  //   this.interfaceAction.initRequestHead()
  // }
};
// NetWork.init();



if (!!window.initData.ga_code) {

  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', window.initData.ga_code, 'auto');
  ga('send', 'pageview');

}
