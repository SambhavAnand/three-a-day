import React from 'react';
import TextField from 'material-ui/TextField';
import './styles.css'

export default class Field extends React.Component{
  constructor(props){
    super(props);
  }
  _handleOnChange = (e,d,a) => {
    console.log(e.target.value);
  }

  render(){
    let {label, placeHolder, value, dispatch, action, type, errorText, disabled,className} = {...this.props}
    return(
        <TextField
            value={value}
            hintText={placeHolder}
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
