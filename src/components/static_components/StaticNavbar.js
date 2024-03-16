import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='fixed-top text-center'>
      <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
        <div className="container">
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" className="rounded-pill nav_logo" alt='' />
              <h3 className='d-inline-block logo_text mt-1'>EduVerse</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_navbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse text-center" id="main_navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link navigation_links' to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link navigation_links' to="about_us">About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link navigation_links' to="contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link navigation_links' to="user_register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link navigation_links' to="user_login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
