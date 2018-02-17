import { handleActions } from 'redux-actions';

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
} from '../actions/addDonatorActions';

let initialState = {
    first_name: null,
    last_name: null,
    donator_type: null,
    restaurant_name: null,
    donator_addr_field: null,
    donator_pin_code: null,
    donator_phone_number: null,
    no_meals: null,
    people_per_meal: null
};


export default handleActions({
    [setFirstName]: (state, action) => ({
      ...state,
      first_name: action.payload
    }),
    [setLastName]: (state,action) => ({
      ...state,
      last_name: action.payload
    }),
    [setDonatorType]: (state,action) => ({
      ...state,
      donator_type: action.payload
    }),
    [setRestaurantName]: (state,action) => ({
      ...state,
      restaurant_name: action.payload
    }),
    [setDonatorAddressField]: ( state, action ) => ({
      ...state,
      donator_addr_field: action.payload
    }),
    [setDonatorPinCode]: ( state, action ) => ({
        ...state,
        donator_pin_code: action.payload
    }),
    [setDonatorPhoneNumber]: ( state, action ) => ({
        ...state,
        donator_phone_number: action.payload
    }),
    [setNoMeals]: (state, action) => ({
      ...state,
      no_meals: action.payload
    }),
    [setPeoplePerMeal]: (state, action) => ({
      ...state,
      people_per_meal: action.payload
    }),
    [resetAddDonatorStore]: (state,action) => ({
      ...state,
      first_name: null,
      last_name: null,
      donator_type: null,
      restaurant_name: null,
      donator_addr_field1: null,
      donator_addr_field2: null,
      donator_pin_code: null,
      donator_phone_number: null
    }),

}, initialState )
