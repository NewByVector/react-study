import React from 'react';
import { createSelector } from 'reselect';

const getCount = state => state.count;
const getPrice = state => state.price;
const totalPaySelector = createSelector(getCount, getPrice, (count, price) => {
  console.log('get total pay');
  return count * price;
});

class ReselectTest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      price: 2,
      val: ''
    };
  }

  getTotalPay = totalPaySelector;
  // getTotalPay = () => {
  //   console.log('get total pay');
  //   return this.state.count * this.state.price;
  // };

  handleChange = (e) => {
    this.setState({
      val: e.target.value
    })
  };

  render () {
    return (
      <div>
        <input value={ this.state.val } onChange={ this.handleChange }/>
        count:<span>{ this.state.count }</span>
        price:<span>{ this.state.price }</span>
        <button onClick={ () => {this.setState({count: this.state.count + 1})} }>count+</button>
        <button onClick={ () => {this.setState({price: this.state.price + 1})} }>price+</button>
        result:<span>{this.getTotalPay(this.state)}</span>
      </div>
    );
  }
}

export default ReselectTest;