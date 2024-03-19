
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT_USER } from '../actions/actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        user: null,
        error: null,
      };
    
    default:
      return state;
  }
};

export default loginReducer;
