import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Robots';
import Navbar from './components/Navbar'
import RobotDetails from './components/RobotDetails'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      
        <BrowserRouter>
        <div>
        <Navbar />
        <Switch>
        
        <Route exact path="/" component={Card} ></Route>
        <Route path="/robot/:id" component={RobotDetails} />
        </Switch>
        </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
