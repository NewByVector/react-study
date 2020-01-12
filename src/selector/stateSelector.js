import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

class StateSelector extends Component {
  static propTypes = {
    initialValue: PropTypes.string,
    options: PropTypes.array
  };

  static defaultProps = {
    initialValue: 'red',
    options: []
  };

  state = { value: null };

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...prevState, value: prevState.value || nextProps.initialValue };
  }

  handleSelect = selected => {
    this.setState({ value: selected });
  };

  render() {
    const { options } = this.props;
    return (
      <div>
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`${opt.value === this.state.value ? "selected" : ""}`}
              onClick={() => this.handleSelect(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export default class StateSelectorDemo extends PureComponent {
  render() {
    return (
      <StateSelector options={options} initialValue="red" />
    );
  }
}
