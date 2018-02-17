import { handleActions } from 'redux-actions';

import {
  setDonatorName,
  setDonatorAddresField1,
  setDonatorAddresField2,
  setDonatorPinCode,
  setDonatorPhoneNumber
} from '../actions/addDonatorActions';

let initialState = {
    donator_name: null,
    donator_addr_field1: null,
    donator_addr_field2: null,
    donator_pin_code: null,
    donator_phone_number: null
};


export default handleActions({
    [setDonatorName]: ({
      ...state,

    })
    [setSignupFirstName]: ( state, action ) => ({
      ...state,
      firstName: action.payload
    }),
    [setSignupLastName]: ( state, action ) => ({
        ...state,
        lastName: action.payload
    }),
    [setSignupEmail]: ( state, action ) => ({
        ...state,
        email: action.payload
    }),
    [setSignupDob]: ( state, action ) => ({
        ...state,
        dob: action.payload
    }),
    [setSignupPhoneNumber]: ( state, action ) => ({
        ...state,
        phoneNumber: action.payload
    }),
    [setSignupPassword]: ( state, action ) => ({
        ...state,
        password: action.payload
    }),
    [setSignupConfirmPassword]: ( state, action ) => ({
        ...state,
        confirmPassword: action.payload
    }),
    [resetSignupStore]: (state,action) => ({
      ...state,
      firstName: '',
      lastName: '',
      email: '',
      dob:moment(),
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }),
    [resetStore]: (state,action) => ({
      ...state,
      firstName: '',
      lastName: '',
      email: '',
      dob:moment(),
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    })

}, initialState )
