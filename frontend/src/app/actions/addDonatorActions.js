import { createAction } from 'redux-actions';

export const setFirstName = createAction('SET_FIRST_NAME');
export const setLastName = createAction('SET_LAST_NAME');
export const setDonatorType = createAction('SET_DONATOR_TYPE');
export const setRestaurantName = createAction('SET_DONATOR_NAME');
export const setDonatorEmail = createAction('SET_DONATOR_EMAIL');
export const setDonatorAddressField = createAction('SET_DONATOR_ADDRESS_FIELD');
export const setDonatorPinCode = createAction('SET_DONATOR_PIN_CODE');
export const setDonatorPhoneNumber = createAction('SET_DONATOR_PHONE_NUMBER');
export const setNoMeals = createAction('SET_NO_MEALS');
export const setPeoplePerMeal = createAction('SET_PEOPLE_PER_MEAL');
export const resetAddDonatorStore = createAction('RESET_ADD_DONATOR_STORE');
