import React, { Component } from 'react';
import '../App/App.css';
import Button from '../Button';
// import '../Button';
// import Button as '../Button';
// const Button = require('../Button')

class Counter extends Component {
  state = {
    countVal : this.props.initialValue,
  }
  incrementCountVal = () => {
    this.setState({
      countVal:this.state.countVal+1
    });
  };
  decrementCountVal = () => {
    this.setState({
      countVal:this.state.countVal-1
    });
  };
  render() {
    // console.log(this);
    return (
      <div>
        <div>Counter: {this.state.countVal}</div>
        <Button caption = "PLUS" onClick = {this.incrementCountVal} />
        <Button caption = "MINUS" onClick = {this.decrementCountVal} />
      </div>
    );
  }
}

export default Counter;