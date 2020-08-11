import { combineReducers } from "redux";
import users from './registrationReducer';

const rootReducer = combineReducers({ users });

export default rootReducer;
