import {combineReducers} from 'redux';

import addDonatorReducer from './addDonatorReducer';

const rootReducer = combineReducers({
  donator: addDonatorReducer
});

export default rootReducer;
