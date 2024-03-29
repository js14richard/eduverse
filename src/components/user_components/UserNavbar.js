import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { log_out_user } from '../../redux/actions/loginAction';
import axios from 'axios';

export default function UserNavbar() {
  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById('profileDropdownMenu');
    dropdownMenu.classList.toggle('show');
  };


  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userName = useSelector((state) => state.auth.user.name);
  const profilePicture = '/profile1.jpeg';

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(log_out_user());
  };



  return (
    <div className='fixed-top text-center'>
      <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
        <div className="container"> 
          <div className='d-flex justify-content-between align-items-center w-100'>
            <NavLink className="navbar-brand" to="/" activeClassName='active'>
              <img src="/logo.png" className="rounded-pill nav_logo" alt='' />
              <h3 className='d-inline-block logo_text mt-1'>EduVerse</h3>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_navbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse text-center" id="main_navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="/" activeClassName='active'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="courses_listing" activeClassName='active'>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="cart" activeClassName='active'>Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="purchased_courses" activeClassName='active'>Learning</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="employees" activeClassName='active'>Users</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <div className="nav-link navbar-brand" id="profileDropdown" onClick={toggleDropdown}>
                  <img src={profilePicture} className=" rounded-pill nav_logo user_icon" alt='Profile' />
                </div>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown" id="profileDropdownMenu">
                  <li className="dropdown-item">Hi {userName}</li>
                  <li><NavLink className='dropdown-item' to="coming_soon">Change Password</NavLink></li>
                  <li><NavLink className='dropdown-item' to="/" onClick={handleLogout}>Logout</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
