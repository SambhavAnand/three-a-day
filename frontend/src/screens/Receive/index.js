import React from 'react';


import Field from '../../components/Fields/index.js';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Snackbar from 'material-ui/Snackbar';
import * as database from '../../utilities/database';

import {
  setFirstName,
  setLastName,
  setCharityName,
  setCharityAddress,
  setCharityPinCode,
  setCharityPhoneNumber,
  setNumberOfPeople,
  setCharityEmail,
  resetAddCharityStore
} from'../../app/actions/addCharityActions';

class Receive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allFieldsComplete: false,
      message: null
    }
  }

  componentWillReceiveProps(nextProps) {
    let allFieldsComplete = this.areAllFieldsComplete(nextProps);
    this.setState({allFieldsComplete:allFieldsComplete});
  }
  componentWillUnmount() {
    this.props.dispatch((resetAddCharityStore()))
  }

  areAllFieldsComplete = (nextProps) => {
    let {
      first_name,
      last_name,
      charity_name,
      email,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...nextProps.charity};
    return !!(first_name && last_name && charity_name &&email&&charity_addr && charity_pin_code  && charity_phone_number && no_of_people);
  }

  handleSubmit = async() => {
    this.setState({disabled: true});
    let {
      first_name,
      last_name,
      charity_name,
      email,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...this.props.charity};

    await database.addCharityRequest(
      first_name,
      last_name,
      email,
      charity_name,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    ).then(response => {
        this.setState({message:"Success. You will get an email with further details. Redirecting You To Home"});
        setTimeout(()=>{
          this.props.dispatch(resetAddCharityStore());
          this.props.history.push('/');
        }, 4000);
      }).catch(error => this.setState({message: error.message, disabled: false}))
  }

  render() {
    let dispatch = this.props.dispatch;
    let {
      first_name,
      last_name,
      email,
      charity_name,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...this.props.charity};
    return (
      <div className="page flood">
      <div className="form-holder">
            <h1>Request food</h1>
            <div className="form">
              <div className="name">
                <Field
                    label="First"
                    value={first_name}
                    type="text"
                    disabled={false}
                    dispatch={dispatch}
                    className="name-first"
                    action={setFirstName}
                />
                <Field
                    value={last_name}
                    label="Last"
                    type="text"
                    disabled={false}
                    dispatch={dispatch}
                    action={setLastName}
                    className="name-last"
                />
              </div>
              <Field
                value={email}
                label="Email"
                type="email"
                disabled={false}
                action={setCharityEmail}
                dispatch={dispatch}
              />
              <Field
                  label="Charity Name"
                  type="text"
                  disabled={false}
                  value={charity_name}
                  action={setCharityName}
                  dispatch={dispatch}
              />
              <Field
                  value={charity_addr}
                  label="Address"
                  type="text"
                  disabled={false}
                  action={setCharityAddress}
                  dispatch={dispatch}
              />
              <Field
                value={charity_pin_code}
                label="Pin Code"
                type="text"
                disabled={false}
                action={setCharityPinCode}
                dispatch={dispatch}
              />
              <Field
                value={charity_phone_number}
                label="Phone Number"
                type="number"
                disabled={false}
                action={setCharityPhoneNumber}
                dispatch={dispatch}
              />


              <Field
                  label="Number of People You Need Food for"
                  type="number"
                  disabled={false}
                  action={setNumberOfPeople}
                  dispatch={dispatch}
                  value={no_of_people}
              />
              {
                !this.state.disabled &&
                  <RaisedButton
                    label="Submit"
                    disabled={!this.state.allFieldsComplete}
                    onClick={this.handleSubmit}
                  />
              }
              {
                this.state.disabled && !this.state.message &&
                <RefreshIndicator
                  size={40}
                  left={10}
                  top={0}
                  status="loading"
                  style={style.refresh}
                />

              }

            </div>
          </div>
          <Snackbar
            open={this.state.message}
            message={this.state.message}
            onRequestClose={()=>this.setState({message:null})}
          />

        </div>
    )
  }
}
Receive = connect(state=>{
  return {
    charity: state.charity
  }
})(Receive);
export default Receive;
const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
