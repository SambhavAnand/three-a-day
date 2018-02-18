import { handleActions } from 'redux-actions';

import {
  setFirstName,
  setLastName,
  setCharityName,
  setCharityAddress,
  setCharityPinCode,
  setCharityPhoneNumber,
  setNumberOfPeople,
  resetAddCharityStore
} from '../actions/addCharityActions';

let initialState = {
    first_name: null,
    last_name: null,
    charity_name: null,
    charity_addr: null,
    charity_pin_code: null,
    charity_phone_number: null,
    no_of_people: null
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
    [setCharityName]: (state,action) => ({
      ...state,
      charity_name: action.payload
    }),
    [setCharityAddress]: ( state, action ) => ({
      ...state,
      charity_addr: action.payload
    }),
    [setCharityPinCode]: ( state, action ) => ({
        ...state,
        charity_pin_code: action.payload
    }),
    [setCharityPhoneNumber]: ( state, action ) => ({
        ...state,
        charity_phone_number: action.payload
    }),
    [setNumberOfPeople]: (state, action) => ({
      ...state,
      no_of_people: action.payload
    }),
    [resetAddCharityStore]: (state,action) => ({
      ...state,
      first_name: null,
      last_name: null,
      charity_name: null,
      charity_addr: null,
      charity_pin_code: null,
      charity_phone_number: null,
      no_of_people: null
    }),

}, initialState )
