import React from 'react';
import {Link} from 'react-router-dom';
import './headerStyles.css';
export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
          <Link to="/"><img src={require('../assets/logos/logo2.png')} className="logo"/></Link>
          <h1>Feeding the world</h1>
          <span id="faux"> </span>
      </div>
    )
  }
}
