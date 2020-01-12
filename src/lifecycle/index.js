import React from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructed");
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    console.log("update");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}