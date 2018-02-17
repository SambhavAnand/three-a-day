import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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
      <div className="prompt-button">
        <RaisedButton label={"\nDONATE\n"} primary={true} fullWidth="true" style={buttonStyle}/>
      </div>
      <div className="prompt-button">
        <RaisedButton label="RECEIVE" primary={true} fullWidth="true" style={buttonStyle}/>
      </div>
      </div>
    )
  }
}
