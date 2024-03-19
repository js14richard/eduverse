
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from '../actions/actionTypes';

const initialState = {
  cartItems: [],
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
