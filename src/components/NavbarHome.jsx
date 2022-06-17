import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";
import apuImg from "../assets/apuImg.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            APFAST
            <img src={apuImg} alt="/" className="w-10" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-signin" onClick={closeMobileMenu} >
              <button type="button" class="btn btn-primary">Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
