import React from "react";
import withTimer from './withTimer';

class HighOrderComponent extends React.Component {

  render() {
    return (
      <div>
        <h2>Time: {this.props.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default withTimer(HighOrderComponent);