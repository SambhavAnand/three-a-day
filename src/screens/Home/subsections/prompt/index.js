import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import './style.css';
let buttonStyle= {
    display:'flex !important',
    alignItems:'center',
    justifyContent:'center',
};
export default class Prompt extends React.Component{

  render(){
    return(
      <div id="prompt">
          <Link to="/donate" className="spaced"><button className="prompt-button" href="/donate">Donate</button></Link>
          <Link to="/receive" className="spaced"><button className="prompt-button" href="/receive">Receive</button></Link>
      </div>
    )
  }
}
