import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAbQGfbEkh0z-9ObkvI_Qp_-hYnXluzefY",
    authDomain: "three-a-day-2d68f.firebaseapp.com",
    databaseURL: "https://three-a-day-2d68f.firebaseio.com",
    projectId: "three-a-day-2d68f",
    storageBucket: "three-a-day-2d68f.appspot.com",
    messagingSenderId: "806425947643"
  };
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
