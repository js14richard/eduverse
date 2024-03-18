import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import courseReducer from './reducers/courseReducer';
import { createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  courses: courseReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store