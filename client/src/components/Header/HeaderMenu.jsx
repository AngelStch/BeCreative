import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);
  return (
    <div id="header" className="nav-collapse">
      <div className="row clearfix">
        <div className="col-1">
          <div id="logo">
            <img src="images/BeCreative-removebg-preview.png" id="banner-logo" alt="Landing Page" />
          </div>
          <nav id="nav-main">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <div className="dropdown">
                      <a className="dropbtn">Gallery</a>
                      <div className="dropdown-content">
                        <Link to="/photosImages">Photos with Images</Link>
                        <Link to="/photos">Photos</Link>
                        <Link to="/stories">Stories</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/options">Create Now</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </>
              )}

              {!isAuthenticated && (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div id="nav-trigger">
            <span />
          </div>
          <nav id="nav-mobile" />
        </div>
      </div>
    </div>
  );
}
