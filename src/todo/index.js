import React from 'react';

class TodoList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick () {
    if (!this.state.text) {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render () {
    return (
      <div>
        <TodoList items={this.state.items}/>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <button type="button" onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Todo;