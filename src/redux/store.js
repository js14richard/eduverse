import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import courseReducer from './reducers/courseReducer';
import { createStore, applyMiddleware } from 'redux';
import loginReducer from './reducers/loginReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  auth:loginReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store