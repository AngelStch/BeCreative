import Main from "./Prising.jsx"
import { Link } from "react-router-dom"


export default function PageMenu() {
    return (
        <div id="header" className="nav-collapse">
            <div className="row clearfix">
              <div className="col-1">
                <div id="logo">
                  <img src="images/logo.png" id="banner-logo" alt="Landing Page" />
                  <img
                    src="images/logo-2.png"
                    id="navigation-logo"
                    alt="Landing Page"
                  />
                </div>
                <nav id="nav-main">
                  <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                    <Link to="/services">Services</Link>
                    </li>
                    <li>
                    <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                    <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                    <Link to="/pricing">Pricing</Link>
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

