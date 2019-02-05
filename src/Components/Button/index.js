import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App/App.css';

class Button extends Component {
  render() {
    console.log(this);
    return (
      <button type="button" onClick = {this.props.onClick}>{this.props.caption}</button>
    );
  }
}

export default Button;
