import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router/index';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, 
  document.getElementById('root')
);