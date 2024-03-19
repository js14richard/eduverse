    import axios from 'axios';
    import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from './actionTypes';

    export const addToCart = (userId, courseId) => {
    return async (dispatch) => {
        try {
        const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
        const user = userResponse.data;

        if (!user.cartItems) {
            throw new Error('Cart items array is missing or null');
        }
        console.log(userId)
        console.log(courseId)
        user.cartItems.push(courseId);

        const updateUserResponse = await axios.put(`http://localhost:3001/users/${userId}`, user, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        console.log(updateUserResponse)
        window.alert("Course Added to Cart")
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: updateUserResponse.data.cartItems });
        } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: error.message });
        }
    };
    };
