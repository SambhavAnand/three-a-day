import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import addVehicleReducer from './addVehicleReducer';
import appWideReducer from './appWideReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer'
import createSubscriptionReducer from './createSubscriptionReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  addVehicle: addVehicleReducer,
  appWideStore: appWideReducer,
  data: dataReducer,
  user: userReducer,
  createSubscription: createSubscriptionReducer
});

export default rootReducer;
