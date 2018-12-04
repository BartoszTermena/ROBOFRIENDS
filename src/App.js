import React, { Component } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Card />
      
      </div>
    );
  }
}

export default App;
