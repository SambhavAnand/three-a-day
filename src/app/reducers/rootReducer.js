import {combineReducers} from 'redux';

import addDonatorReducer from './addDonatorReducer';
import addCharityReducer from './addCharityReducer'

const rootReducer = combineReducers({
  donator: addDonatorReducer,
  charity: addCharityReducer
});

export default rootReducer;
