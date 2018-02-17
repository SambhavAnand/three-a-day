import React from 'react';
import './headerStyles.css';
export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
          <img src={require('../assets/logos/logo.png')} className="logo"/>
          <h1>INSERT SLOGAN HERE</h1>
          <span id="faux"> </span>
      </div>
    )
  }
}
