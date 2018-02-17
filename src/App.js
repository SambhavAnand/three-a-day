import React, { Component } from 'react';
import './App.css';

import Main from './root/Main';
import Header from './root/Header';

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
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
