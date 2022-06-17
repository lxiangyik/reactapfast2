import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";
import apuImg from "../assets/apuImg.png";

function Navbar(props) {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/dashboard" className="navbar-logo" onClick={closeMobileMenu}>
            APFAST
            <img src={apuImg} alt="/" className="w-10" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/timetable" className="nav-links" onClick={closeMobileMenu} >
                Timetable
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/attendance" className="nav-links" onClick={closeMobileMenu} >
                Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-signin" onClick={closeMobileMenu} >
              <button type="button" class="btn btn-primary" onClick={props.userLogOut}>Sign Out</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
