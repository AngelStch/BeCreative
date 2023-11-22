import { Link } from "react-router-dom"
import '../../../public/css/animate.css'
import '../../../public/css/font-awesome.min.css'
import '../../../public/css/namari-color.css'
import '../../../public/css/style.css'

export default function Header() {
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
              <li><div className="dropdown">
                <a className="dropbtn">Gallery</a>
                <div className="dropdown-content">
                  <Link href="#">Photos with Images</Link>
                  <Link href="#">Photos</Link>
                  <Link href="#">Images</Link>
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
          <div id="nav-trigger">
            <span />
          </div>
          <nav id="nav-mobile" />
        </div>
      </div>
    </div>
  )
}

