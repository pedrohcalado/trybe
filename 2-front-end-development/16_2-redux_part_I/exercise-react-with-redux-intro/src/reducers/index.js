const { combineReducers } = require("redux");
const { default: trafficSignalReducer } = require("./trafficSignalReducer");
const { default: carsReducer } = require("./carsReducer");

export const reducer = combineReducers({trafficSignalReducer, carsReducer});
