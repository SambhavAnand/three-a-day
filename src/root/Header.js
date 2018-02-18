import React from 'react';
import './headerStyles.css';
export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
          <img src={require('../assets/logos/logo2.png')} className="logo"/>
          <h1>Feeding the world</h1>
          <span id="faux"> </span>
      </div>
    )
  }
}
