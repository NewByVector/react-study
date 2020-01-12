import React, { PureComponent } from "react";
import "./index.css";

export default class Snapshot extends PureComponent {
  state = {
    messages: []
  };

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
  }

  handleNewMessage() {
    this.setState(prev => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages],
    }));
  }

  render() {
    return (
      <div className="snapshot" ref={n => (this.rootNode = n)}>
        {this.state.messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    );
  }
}
