import { createAction } from 'redux-actions';

export const setDonatorName = createAction('SET_DONATOR_NAME');
export const setDonatorAddresField1 = createAction('SET_DONATOR_ADDRESS_FIELD_1');
export const setDonatorAddresField2 = createAction('SET_DONATOR_ADDRESS_FIELD_2');
export const setDonatorPinCode = createAction('SET_DONATOR_PIN_CODE');
export const setDonatorPhoneNumber = createAction('SET_DONATOR_PHONE_NUMBER');
