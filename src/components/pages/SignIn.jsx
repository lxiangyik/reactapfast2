import React, { useState } from "react";
import "../css/SignIn.css";
import Navbar from "../Navbar";
import LogInForm from "../LogInForm";

export default function SignIn(props) {
  return (
    <>
      <div>
        {/* if email not equal to null */}
        {props.user.email !== "" ? (
          <div>
            <Navbar user={props.user} userLogIn={props.userLogIn} userLogOut={props.userLogOut} error={props.error} />
          </div>
        ) : 
        // if email is null
        (
          <LogInForm userLogIn={props.userLogIn} error={props.error} />
        )}
      </div>
    </>
  );
}
