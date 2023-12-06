import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import Path from '../../path.js';
import '../../../public/css/header.css'
export default function Header() {
  const {
    isAuthenticated,
    email,
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
                <Link to={Path.Home} >Home</Link>
              </li>
              <li>
                <Link to={Path.About} >About</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <div className="dropdown">
                      <a className="dropbtn">Gallery</a>
                      <div className="dropdown-content">
                        <Link to={Path.PhotosImages} >Photos with Images</Link>
                        <Link to={Path.Photos} >Photos</Link>
                        <Link to={Path.Stories} >Stories</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={Path.Options} >Create Now</Link>
                  </li>
                  <li>
                    <Link to={Path.Logout} >Logout</Link>
                  </li>
                </>
              )}

              {!isAuthenticated && (
                <>
                  <li>
                    <Link to={Path.Register} >Register</Link>
                  </li>
                  <li>
                    <Link to={Path.Login} >Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
