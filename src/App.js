import React, { Component } from 'react';
import {Core} from './helpers/Core';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-heading">Learning to Devops</h1>
          
        </header>
        <div className="App-toDoList">
          <ul>
              <li className="strikeThrough">Create a small app</li>
              <li>Create git repo</li>
              <li>Get AWS sorted</li>
              <li>Create Aws account</li>
              <li>Deploy</li>
              <ul>
                <li>a) upload files to aws instance</li>
                <li>a) create docker image and then deploy to aws instance</li>
                <li>a) Play with docker hub and rancher for continuous integration</li>
              </ul>            
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
