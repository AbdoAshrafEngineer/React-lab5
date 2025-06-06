import { applyMiddleware, createStore } from 'redux';
import combineReducer from './combineReducer';
// import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(combineReducer,applyMiddleware(thunk));

export default store;