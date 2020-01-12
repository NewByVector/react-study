import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

import Todo from './todo/index';
import Selector from './selector/selector';
import StateSelector from './selector/stateSelector';
import LifeCycle from './lifecycle/index';
import Snapshot from './snapshot/index';
import DomDiff from './diff/index';
import HighOrderComponent from './component/highOrderComponent';
import FunSubComponent from './component/funSubComponent';
import ContextApi from './context-api/index';
import ReduxTest from './redux/test';

ReactDOM.render(
  <Provider store={store}>
    <ReduxTest />
  </Provider>, 
  document.getElementById('root')
);