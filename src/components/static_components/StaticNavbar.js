import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='fixed-top text-center'>
      <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center w-100'>
            <NavLink className="navbar-brand" to="/" activeclassname='active'>
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
                <NavLink className='nav-link navigation_links' to="" activeclassname='active'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="about_us" activeclassname='active'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="courses_listing" activeclassname='active'>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="user_registration" activeclassname='active'>Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="user_login" activeclassname='active'>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
