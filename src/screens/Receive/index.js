import React from 'react';


import Field from '../../components/Fields/index.js';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import * as database from '../../utilities/database';

import {
  setFirstName,
  setLastName,
  setCharityName,
  setCharityAddress,
  setCharityPinCode,
  setCharityPhoneNumber,
  setNumberOfPeople,
  resetAddCharityStore
} from'../../app/actions/addCharityActions';

class Receive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allFieldsComplete: false
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
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...nextProps.charity};
    return !!(first_name && last_name && charity_name && charity_addr && charity_pin_code  && charity_phone_number && no_of_people);
  }

  handleSubmit = async() => {
    this.setState({disabled: true});
    let {
      first_name,
      last_name,
      charity_name,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...this.props.charity};

    await database.addCharityRequest(
      first_name,
      last_name,
      charity_name,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    ).then(response => console.log('success', response)).catch(error => console.log(error))
  }

  render() {
    let dispatch = this.props.dispatch;
    let {
      first_name,
      last_name,
      charity_name,
      charity_addr,
      charity_pin_code,
      charity_phone_number,
      no_of_people
    } = {...this.props.charity};
    console.log('sav', this.props.charity)
    return (
        <div className="page flood">
            <h1>Donate some food!</h1>
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
                  label="Charity Name"
                  type="text"
                  disabled={false}
                  value={charity_name}
                  action={setCharityName}
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
                this.state.disabled &&
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
    )
  }
}
Receive = connect(state=>{
  charity: state.charity
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
