import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Address from './Address';
import Footer from './Footer';
import {loginUser} from '../../redux/actions/loginAction'
import { Navigate, useNavigate } from 'react-router-dom';


export default function UserLogin() {
  const { register, handleSubmit, formState: { errors }, reset  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log('Form data:', data);
    dispatch(loginUser(data));
    reset();
    navigate('/courses_listing');
  };

  return (
    <div>
      <div className="container pt-5 mt-5">
        <h2 className="mb-4 text-center">User Login</h2>
        <div className="row justify-content-around align-items-center">
          <div className='col-lg-5'>
            <img src='/user_login.jpg' className='img-fluid user_login_image' alt="User Login" />
          </div>
          <div className="col-lg-5 card">
            <div className='card-body mt-4'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="form-control"
                    placeholder="Enter Email"
                  />  
                  {errors.email && <span className="text-danger">Email is required</span>}
                </div>
                <div className="mb-4">
                  <div className="input-group password_toogle">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register('password', { required: true})}
                      className="form-control"
                      placeholder="Enter Password"
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
                  {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>
                <div className='row justify-content-center'>
                  <button type="submit" className="col-lg-6 btn btn-info p-2 login_button" disabled={loading}>Login</button>
                </div>
                <div className='row mt-3 text-center'>
                  {error && <h6 className='text-danger'>{error}</h6>}
                </div>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-lg-5'>
                    <Link className='login_page_link' to="/coming_soon">Forget Password</Link>
                  </div>
                  <div className='col-lg-5'>
                    <Link className='login_page_link' to="/user_registration">Create New Account</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Address />
      <Footer />
    </div>
  );
}
