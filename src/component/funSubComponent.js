import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Selector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {}
  };

  render() {
    const { options, value, onChange } = this.props;
    return (
      <div>
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`${opt.value === value ? "selected": ""}`}
              onClick={() => onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        {this.props.value && this.props.children(this.props.value)}
      </div>
    );
  }
}

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export default class SelectorDemo extends PureComponent {
  state = {
    color: 'red'
  };
  
  render() {
    return (
      <Selector
        options={options}
        value={this.state.color}
        onChange={c => this.setState({ color: c })}
      >
        {
          color => (
            <div style={{width: 50, height: 50, background: color}}></div>
          )
        }
      </Selector>
    );
  }
}