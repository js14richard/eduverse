import axios from 'axios';
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from './actionTypes';

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST
});

export const fetchCoursesSuccess = courses => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses
});

export const fetchCoursesFailure = error => ({
  type: FETCH_COURSES_FAILURE,
  payload: error
});

export const fetchCourses = () => {
    return async dispatch => {
      dispatch(fetchCoursesRequest());
      try {
        const response = await axios.get('http://localhost:3001/courses');
        dispatch(fetchCoursesSuccess(response.data));
      } catch (error) {
        dispatch(fetchCoursesFailure(error.message));
      }
    };
  };
  