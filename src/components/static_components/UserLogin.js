import React, { useState } from 'react';
import Address from './Address';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function UserLogin() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email);
    console.log('Password:', password);
  }

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
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <div className="input-group password_toogle">
                  <input
                    type={showPassword ? "text" : "password"}
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
              </div>
              <div className='row justify-content-center'>
                <button type="submit" className="col-lg-6 btn btn-info p-2 login_button">Login</button>
              </div>
              <div className='row d-flex justify-content-center mt-4'>
                <div className='col-lg-5'>
                <Link className='login_page_link' to="/coming_soon">Forget Password</Link>
                </div>
                <div className='col-lg-5'>
                <Link className='login_page_link' to="/coming_soon">Create New Account</Link>
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
  )
}
