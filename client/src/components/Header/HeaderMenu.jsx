import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import userService from '../../service/userService.js';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const isAuthenticated = await userService.checkAuthentication();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      // Perform logout or clear authentication token
      // For example, userService.logoutUser();
      // After logout, update the authentication status
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div id="header" className="nav-collapse">
      <div className="row clearfix">
        <div className="col-1">
          <div id="logo">
            <img src="images/BeCreative-removebg-preview.png" id="banner-logo" alt="Landing Page" />
          </div>
          {isAuthenticated ? (
            <nav id="nav-main">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <div className="dropdown">
                    <a className="dropbtn">Gallery</a>
                    <div className="dropdown-content">
                      <Link to="/photosImages">Photos with Images</Link>
                      <Link to="/photos">Photos</Link>
                      <Link to="/Stories">Stories</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/options">Create Now</Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </nav>
          ) : (
            <nav id="nav-main">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <div className="dropdown">
                    <a className="dropbtn">Gallery</a>
                    <div className="dropdown-content">
                      <Link to="/photosImages">Photos with Images</Link>
                      <Link to="/photos">Photos</Link>
                      <Link to="/Stories">Stories</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/options">Create Now</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          )}
          <div id="nav-trigger">
            <span />
          </div>
          <nav id="nav-mobile" />
        </div>
      </div>
    </div>
  );
}
