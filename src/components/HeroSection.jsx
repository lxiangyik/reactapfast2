import React from "react";
import "../App.css";
import "../components/css/HeroSection.css";
// import earthRotation from "../assets/earthRotation.mp4";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you hesitating?</p>
      <div className="hero-btns">
        <Link to="/sign-in">
          <button type="button" class="btn btn-light">
            SIGN IN <i className="fa fa-sign-in" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
