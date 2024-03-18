import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // Assume you have access to the user's name
  const [userName, setUserName] = useState("John"); // Example user name

  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById('profileDropdownMenu');
    dropdownMenu.classList.toggle('show');
  };

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
                <NavLink className='nav-link navigation_links' to="/" activeclassname='active'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="courses_listing" activeclassname='active'>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="cart" activeclassname='active'>Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link navigation_links' to="profile" activeclassname='active'>Dashboard</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <div className="nav-link" id="profileDropdown" onClick={toggleDropdown}>
                  <i className="fas fa-user-circle user_icon"></i>
                </div>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown" id="profileDropdownMenu">
                  <li className="dropdown-item">Hi {userName}</li>
                  <li><NavLink className='dropdown-item' to="coming_soon">Change Password</NavLink></li>
                  <li><NavLink className='dropdown-item' to="logout">Logout</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
