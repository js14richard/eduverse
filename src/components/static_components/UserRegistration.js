import React from 'react'
import { useForm } from 'react-hook-form';
import Footer from './Footer';
import Address from './Address';

export default function UserRegistration() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
  };
  
  return (
  <div>
    <div className="container pt-5 mt-5">
      <h2 className="mb-4 text-center">User Registration</h2>
      <div className="row justify-content-between align-items-center">
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
              <input
                type="password"
                {...register('password', { required: true })}
                className="form-control"
                placeholder="Password"
              />
              {errors.password && <span className="text-danger">password is required</span>}
            </div>

            <div>
              <input
                type="text"
                {...register('phone_number', { required: true })}
                className="form-control"
                placeholder="Phone Number"
              />
              {errors.phone_number && <span className="text-danger">phone_number is required</span>}
            </div>
            
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
  )
}
