import React from 'react';
import TextField from 'material-ui/TextField';
import './styles.css'

export default class Field extends React.Component{
  constructor(props){
    super(props);
  }
  _handleOnChange = (e,d,a) => {
    d(a(e.target.value));
  }

  render(){
    let {label, value, dispatch, action, type, errorText, disabled,className} = {...this.props}
    return(
        <TextField
            value={value}
            floatingLabelText={label}
            type={type}
            onChange={(e)=>this._handleOnChange(e,dispatch,action)}
            errorText={errorText}
            disabled={disabled}
            className={className || "field"}
        />

    )
  }


}
