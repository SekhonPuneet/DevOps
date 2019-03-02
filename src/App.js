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
              <li className="strikeThrough">Create git repo</li>
              <ul>
                
                <li className="strikeThrough">a) create docker image and run docker container</li>
                <li>a) Play with docker hub and rancher for continuous integration</li>
              </ul> 
              <li>Get AWS sorted</li>
              <li>Upload files to aws instance</li>              
              <li>Deploy</li>
                         
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
