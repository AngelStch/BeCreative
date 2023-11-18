import Main from "./Prising.jsx"
import { Link } from "react-router-dom"
import '../../public/css/animate.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/namari-color.css'
import '../../public/css/style.css'

export default function PageMenu() {
    return (
        <div id="header" className="nav-collapse">
            <div className="row clearfix">
              <div className="col-1">
                <div id="logo">
                  <img src="images/BeCreative.PNG" id="banner-logo" alt="Landing Page" />
                  
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

