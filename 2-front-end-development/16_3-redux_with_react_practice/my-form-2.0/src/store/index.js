// import rootReducer from "../reducers";
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from "../reducers/emailReducer";

const { createStore } = require("redux");

const store = createStore(reducer, devToolsEnhancer());

export default store;
