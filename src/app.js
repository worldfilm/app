import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/Store.js'
import Body from './page/Body.js'
import {network} from './config/config.js';
ReactDOM.render((
  <Body store={store}/>
), document.getElementById('Main'));
