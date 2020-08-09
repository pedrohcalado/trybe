import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/index.js';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;