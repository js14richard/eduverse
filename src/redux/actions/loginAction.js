
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_USER,
  LOG_OUT_USER
} from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login_user = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const log_out_user = (user) => ({
    type: LOG_OUT_USER,
    payload: user,
  });

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data;

    const user = users.find(user => user.email === userData.email && user.password === userData.password);

    if (user) {
      dispatch(loginSuccess(user));
      dispatch(login_user(user)); 
      localStorage.setItem('user', JSON.stringify(user));

    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
