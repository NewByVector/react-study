import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
import Todo from '../todo/index';
import StateSelector from '../selector/stateSelector';
import LifeCycle from '../lifecycle/index';
import Snapshot from '../snapshot/index';
import DomDiff from '../diff/index';
import HighOrderComponent from '../component/highOrderComponent';
import FunSubComponent from '../component/funSubComponent';
import ContextApi from '../context-api/index';
import ReduxTest from '../redux/test';
import ReselectTest from '../reselect/index';
import HookTest from '../hook/index';

//懒加载
const Selector = loadable({
  loader: () => import('../selector/selector'),
  loading: () => <div>loading...</div>
});

const Content = ({ match }) => {
  switch(match.params.type) {
    case 'todo':
      return <Todo/>;
    case 'selector':
      return <Selector/>;
    case 'stateSelector':
        return <StateSelector/>;
    case 'lifeCycle':
      return <LifeCycle/>;
    case 'snapshot':
      return <Snapshot/>;
    case 'domDiff':
      return <DomDiff/>;
    case 'highOrderComponent':
      return <HighOrderComponent/>;
    case 'funSubComponent':
      return <FunSubComponent/>;
    case 'contextApi':
      return <ContextApi/>;
    case 'reduxTest':
      return <ReduxTest/>;
    case 'reselect':
      return <ReselectTest />;
    case 'hook':
      return <HookTest />;
    default:
      break;
  }
};

export default class MyRouter extends React.PureComponent {
  render () {
    return (
      <Router>
        <ul className="menu">
          <li>
            <Link to="/page/todo">Todo</Link>
          </li>
          <li>
            <Link to="/page/selector">Selector</Link>
          </li>
          <li>
            <Link to="/page/stateSelector">StateSelector</Link>
          </li>
          <li>
            <Link to="/page/lifeCycle">LifeCycle</Link>
          </li>
          <li>
            <Link to="/page/snapshot">Snapshot</Link>
          </li>
          <li>
            <Link to="/page/domDiff">DomDiff</Link>
          </li>
          <li>
            <Link to="/page/highOrderComponent">HighOrderComponent</Link>
          </li>
          <li>
            <Link to="/page/funSubComponent">FunSubComponent</Link>
          </li>
          <li>
            <Link to="/page/contextApi">ContextApi</Link>
          </li>
          <li>
            <Link to="/page/reduxTest">ReduxTest</Link>
          </li>
          <li>
            <Link to="/page/reselect">Reselect</Link>
          </li>
          <li>
            <Link to="/page/hook">Hook</Link>
          </li>
        </ul>
        <div className="content">
          <Route path="/page/:type" component={Content}/>
          <Redirect to="/page/todo"/>
        </div>
      </Router>
    );
  }
}