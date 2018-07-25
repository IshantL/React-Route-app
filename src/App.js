import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
          <ul>
          <li>
          <Link to="/One">One</Link>
          </li>
          <li>
          <Link to="/Two">Two</Link>
          </li>
          </ul>
        
       </div>
      </div>
    );
  }
}

export default App;
