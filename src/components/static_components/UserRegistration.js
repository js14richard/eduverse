import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Footer from './Footer';
import Address from './Address';

export default function UserRegistration() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3001/users', data);
      setRegistrationSuccess(true);
      reset();
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationError(true);
      setTimeout(() => {
        setRegistrationError(false);
      }, 5000);
    }
  };
  
  return (
    <div>
      <div className="container pt-5 mt-5">
        <h2 className="mb-4 text-center">User Registration</h2>
        {/* Bootstrap danger alert */}
        {registrationError && (
                <div className="alert alert-danger mt-3" role="alert">
                  Error registering user. Please try again later.
                </div>
        )}

        {/* Bootstrap success alert */}
        {registrationSuccess && (
                <div className="alert alert-success mt-3" role="alert">
                  User registered successfully!
                </div>
              )}

        <div className="row justify-content-between align-items-center mt-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="form-control"
                  placeholder="Your Name"
                />
                {errors.name && <span className="text-danger">Name is required</span>}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="form-control"
                  placeholder="Your Email"
                />  
                {errors.email && <span className="text-danger">Email is required</span>}
              </div>
              <div className="mb-4">
                <div className="input-group password_toogle">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register('password', { required: true, pattern:/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/ })}
                    className="form-control"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="btn btn-info bg-blue"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="fa-regular fa-eye-slash toogle_icon"></i>
                    ) : (
                      <i className="fa-regular fa-eye toogle_icon"></i>
                    )}
                  </button>
                </div>
                {errors.password && errors.password.type === "required" && (
                  <span className="text-danger">Password is required</span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span className="text-danger">
                    Password should contain at least 8 characters, one uppercase letter, and one special character
                  </span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...register('phone', { required: true, minLength: 10  })}
                  className="form-control"
                  placeholder="Phone Number"
                />
                {errors.phone && <span className="text-danger">Phone number is required</span>}
                {errors.phone && errors.phone.type === 'minLength' && <span className="text-danger">Phone number must be at least 10 digits</span>}
              </div>

              {/* Hidden input field */}
              <input
                type="hidden"
                {...register('purchasedCourses', { value: [] })}
              />

              <input
                type="hidden"
                {...register('cartItems', { value: [] })}
              />
              
              <button type="submit" className="btn btn-info mt-4 col-lg-12">Sign Up</button>
              
            </form>
          </div>
          <div className='col-lg-4'>
            <img src='/user_registration.jpg' className='img-fluid register_image mt-3' alt="..." />
          </div>
        </div>
      </div>
      <Address/>
      <Footer/>
    </div>
  );
}
