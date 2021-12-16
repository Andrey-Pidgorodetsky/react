import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {
    const divStyle={
      'text-align': 'center',
    }
    return(
      <div  style={divStyle}>
        <h1>Hello World</h1>

        <Car name={'Ford'} year={2018}></Car>
          <p style={{color: 'Blue'}}>Color</p>
        <Car name={'Audi'} year={2016}></Car>
          <p style={{color: 'red'}}>Color</p>
        <Car name={'Mazda'} year={2010}></Car>
      </div>
    );
  }
}

export default App;

