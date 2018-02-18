import React from 'react';
import './styles.css';
import Field from '../../components/Fields/index.js';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import {
  setFirstName,
  setLastName,
  setDonatorType,
  setRestaurantName,
  setDonatorAddressField,
  setDonatorPinCode,
  setDonatorPhoneNumber,
  setNoMeals,
  setPeoplePerMeal,
  setDonatorEmail,
  resetAddDonatorStore
} from '../../app/actions/addDonatorActions';
import * as database from '../../utilities/database';

class Donate extends React.Component {

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
    this.props.dispatch((resetAddDonatorStore()))
  }

  areAllFieldsComplete = (nextProps) => {
    let {
      first_name,
      last_name,
      donator_type,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      email,
      people_per_meal
    } = {...nextProps.donator};
    return !!(first_name && last_name && donator_type && donator_addr_field &&email&& donator_pin_code && donator_pin_code && donator_phone_number && no_meals && people_per_meal);
  }

  handleSubmit = async() => {
    this.setState({disabled: true});
    let {
      first_name,
      last_name,
      donator_type,
      email,
      restaurant_name,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal
    } = {...this.props.donator};

    await database.addDonation(
      first_name,
      last_name,
      email,
      donator_type,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal,
      restaurant_name,
    ).then(response => {
      this.setState({message: 'Success. You will get an email with further details. Redirecting You To Home'});
      setTimeout(()=> {
        this.props.dispatch(resetAddDonatorStore());
        this.props.history.push('/');
      },4000);
    }).catch(error => this.setState({message: error.message, disabled:false}))
  }

  render() {
    let dispatch = this.props.dispatch;
    let {
      first_name,
      last_name,
      email,
      donator_type,
      restaurant_name,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal
    } = {...this.props.donator};
    return (
      <div className="page flood">
      <div className="form-holder">

            <h1>Share</h1>
            {
              !donator_type &&
              (
                <div>
                  <h2>Are you a <FlatButton label="Restaurant"  primary={true} onClick={()=>dispatch(setDonatorType('restaurant'))}/> or an
                  <FlatButton label="Individual"  primary={true} onClick={()=>dispatch(setDonatorType('individual'))}/>?</h2>
                </div>
              )
            }
            {
              donator_type &&
              (
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
                      action={setDonatorEmail}
                      dispatch={dispatch}
                  />
                  <Field
                      value={donator_addr_field}
                      label="Address"
                      type="text"
                      disabled={false}
                      action={setDonatorAddressField}
                      dispatch={dispatch}
                  />
                  <Field
                    value={donator_pin_code}
                    label="Pin Code"
                    type="text"
                    disabled={false}
                    action={setDonatorPinCode}
                    dispatch={dispatch}
                  />
                  <Field
                    value={donator_phone_number}
                    label="Phone Number"
                    type="number"
                    disabled={false}
                    action={setDonatorPhoneNumber}
                    dispatch={dispatch}
                  />
                  {
                    donator_type==='restaurant' &&
                    <Field
                        label="Restaurant Name"
                        type="text"
                        disabled={false}
                        value={restaurant_name}
                        action={setRestaurantName}
                        dispatch={dispatch}
                    />
                  }

                  <Field
                      label="Number of dishes"
                      type="number"
                      disabled={false}
                      action={setNoMeals}
                      dispatch={dispatch}
                      value={no_meals}
                  />
                  <Field
                      label="Number of people per dish"
                      type="number"
                      disabled={false}
                      action={setPeoplePerMeal}
                      dispatch={dispatch}
                      value={people_per_meal}
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
              )
            }
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

Donate = connect(state => {
    return {
        donator: state.donator,
    }
})(Donate);
export default Donate;
const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
