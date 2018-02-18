import { createAction } from 'redux-actions';

export const setFirstName = createAction('SET_CHARITY_FIRST_NAME');
export const setLastName = createAction('SET_CHARITY_LAST_NAME');
export const setCharityName = createAction('SET_CHARITY_NAME');
export const setCharityEmail = createAction('SET_CHARITY_EMAIL');
export const setCharityAddress = createAction('SET_CHARITY_ADDRESS');
export const setCharityPinCode = createAction('SET_CHARITY_PIN_CODE');
export const setNumberOfPeople = createAction('SET_NUMBER_OF_PEOPLE');
export const setCharityPhoneNumber = createAction('SET_CHARITY_PHONE_NUMBER');
export const resetAddCharityStore = createAction('RESET_ADD_CHARITY_STORE');
