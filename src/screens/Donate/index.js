import React from 'react';
import './styles.css';
import Field from '../../components/Fields/index.js';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
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
  resetAddDonatorStore
} from '../../app/actions/addDonatorActions';
import * as database from '../../utilities/database';

class Donate extends React.Component {

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
      people_per_meal
    } = {...nextProps.donator};
    return !!(first_name && last_name && donator_type && donator_addr_field && donator_pin_code && donator_pin_code && donator_phone_number && no_meals && people_per_meal);
  }

  handleSubmit = async() => {
    this.setState({disabled: true});
    let {
      first_name,
      last_name,
      donator_type,
      restaurant_name,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal
    } = {...this.props.donator};

    await database.addDonator(
      first_name,
      last_name,
      donator_type,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal,
      restaurant_name
    ).then(response => console.log('success', response)).catch(error => console.log(error))
  }

  render() {
    let dispatch = this.props.dispatch;
    let {
      first_name,
      last_name,
      donator_type,
      restaurant_name,
      donator_addr_field,
      donator_pin_code,
      donator_phone_number,
      no_meals,
      people_per_meal
    } = {...this.props.donator};
    return (
        <div className="page">
            <h1>Donate some food!</h1>
            {
              !donator_type &&
              (
                <div>
                  <h2>Are you a restaurant or an individual?</h2>
                  <RaisedButton label="Restaurant" onClick={()=>dispatch(setDonatorType('restaurant'))}/>
                  <RaisedButton label="Individual" onClick={()=>dispatch(setDonatorType('individual'))}/>
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
              )
            }

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


/*
<div className="form">
  <div className="name">
    <Field
        label="First"
        value={this.props.donator.first_name}
        type="text"
        disabled={false}
        dispatch={dispatch}
        className="name-first"
        action={setFirstName}
    />
    <Field
        label="Last"
        type="text"
        disabled={false}
        dispatch={dispatch}
        className="name-last"
    />
  </div>
  <Field
      label="Address"
      placeHolder="15W 10th St."
      type="text"
      disabled={false}
      dispatch={dispatch}
  />
  <Field
      label="Restaurant"
      type="text"
      disabled={false}
      dispatch={dispatch}
  />
  <Field
      label="Number of dishes"
      type="number"
      disabled={false}
      dispatch={dispatch}
  />
  <Field
      label="Number of people per dish"
      type="number"
      disabled={false}
      dispatch={dispatch}
  />
</div>
*/
