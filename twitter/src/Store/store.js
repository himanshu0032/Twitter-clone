import { authReducer } from "./Auth/Reducer";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
 import {thunk} from "redux-thunk";
import { tweetReducer } from "./Tweet/Reducer";

// const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
//const { thunk } = require("redux-thunk");

const rootReducers = combineReducers({
   auth:authReducer,
   tweet:tweetReducer
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));