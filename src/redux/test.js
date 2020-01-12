import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFileSync, getFileAsync } from './actions';

class ReduxTest extends React.Component {
  onSyncClick = () => {
    this.props.actions.getFileSync();
  };

  onAsyncClick = () => {
    this.props.actions.getFileAsync();
  };
  
  render () {
    return (
      <div>
        syncText:<span>{this.props.syncText}</span><br/>
        asyncText:<span>{this.props.asyncText}</span><br/>
        <button onClick={this.onSyncClick}>Sync</button><br/>
        <button onClick={this.onAsyncClick}>Async</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    syncText: state.sync.text,
    asyncText: state.async.text
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getFileSync, getFileAsync }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);