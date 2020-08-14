import { combineReducers } from "redux";
import users from './registrationReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ users, loginReducer });

export default rootReducer;
