import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  const userId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        setCartItems(response.data.cartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseDetails = {};
      for (const itemId of cartItems) {
        try {
          const response = await axios.get(`http://localhost:3001/courses/${itemId}`);
          courseDetails[itemId] = response.data;
          courseDetails[itemId].quantity = 1;
        } catch (error) {
          console.error(`Error fetching course details for item ID ${itemId}:`, error);
        }
      }
      setCartDisplay(Object.values(courseDetails));
    };

    fetchCourseDetails();
  }, [cartItems]);

  const handleQuantityChange = (itemId, quantityChange) => {
    const updatedCartItems = cartDisplay.map(course => {
      if (course.id === itemId) {
        const newQuantity = Math.max(0, course.quantity + quantityChange);
        return { ...course, quantity: newQuantity };
      }
      return course;
    });
    setCartDisplay(updatedCartItems);
  };

  const handleDeleteItem = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item from the cart?')) {
      try {
        await axios.put(`http://localhost:3001/users/${userId}`, {
          cartItems: cartItems.filter(id => id !== itemId) // Remove the item from cartItems array
        });
        setCartItems(cartItems.filter(id => id !== itemId)); // Update local state
      } catch (error) {
        console.error('Error deleting item from cart:', error);
      }
    }
  };

  const handleClearCart = async () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      try {
        await axios.put(`http://localhost:3001/users/${userId}`, { cartItems: [] });
        setCartItems([]); // Clear cartItems state
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    }
  };

  const proceedPayment = async () => {
    if (window.confirm('Confirm Payment?')) {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        const userData = response.data;
  
        const updatedPurchasedCourses = [...userData.purchasedCourses, ...cartItems];
        const uniquePurchasedCourses = [...new Set(updatedPurchasedCourses)];
        await axios.put(`http://localhost:3001/users/${userId}`, {
          purchasedCourses: uniquePurchasedCourses,
          cartItems: []
        });
        setCartItems([]);
      } catch (error) {
        console.error('Error proceeding with payment:', error);
      }
    }
  };
  

  const getTotalPrice = () => {
    return cartDisplay.reduce((total, course) => total + (course.quantity * course.price), 0);
  };

  return (
    <div className=' mt-5 container'>
      <div className='table-responsive text-center'>
        <table className='mt-5 table table-bordered table-hover align-middle table-sm'>
          <thead className='table-warning'>
            <tr>
              <th scope='col'>Course ID</th>
              <th scope='col'>Course Title</th>
              <th scope='col'>Category</th>
              <th scope='col'>Rating</th>
              <th scope='col'>Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total Price</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartDisplay.map((course, index) => (
              <tr key={index}>
                <td className='p-lg-3'>{course.id}</td>
                <td className='p-lg-3'>{course.title}</td>
                <td className='p-lg-3'>{course.category}</td>
                <td className='p-lg-3'>{course.rating.rate}</td>
                <td className='p-lg-3'>${course.price}</td>
                <td className='p-lg-3'>
                  <button className='btn btn-sm btn-info' onClick={() => handleQuantityChange(course.id, -1)}>-</button>
                  <span className='mx-2'>{course.quantity}</span>
                  <button className='btn btn-sm btn-info' onClick={() => handleQuantityChange(course.id, 1)}>+</button>
                </td>
                <td className='p-3'>${course.quantity * course.price}</td>
                <td className='p-lg-3'>
                  <button className='btn btn-sm btn-danger' onClick={() => handleDeleteItem(course.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" className="text-end ">Total Price:</td>
              <td className="p-3">${getTotalPrice()}</td>
              <td className="p-3">
                <button className='btn btn-sm btn-danger' onClick={handleClearCart}>Clear Cart</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className='row text-center'>
        <div className='col-lg-12 mt-5'>
            <button className='btn btn-success col-lg-4' onClick={proceedPayment}>Proceed For Payment</button>
        </div>
      </div>
    </div>
  );
}
