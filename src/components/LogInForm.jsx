import React, { useState } from "react";
import "./css/SignIn.css";
import NavbarHome from "./NavbarHome";

export default function LogInForms(userLogIn, error) {

    const [details, setDetails] = useState({email: "", password: "", staffYesNo: false });
    const submitHandler = (event) => {
      event.preventDefault();
      userLogIn(details);
    };

    const emailChangeHandler = (event) => {
      setDetails({ ...details, email: event.target.value });
    };
    const passwordChangeHandler = (event) => {
      setDetails({ ...details, password: event.target.value });
    };
    const staffYesNoChangeHandler = (event) => {
        setDetails({ ...details, staffYesNo: event.target.value });
      };

  return (
    <div>
      <NavbarHome />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input type="email" name="email" id="email" onChange={emailChangeHandler} value={details.email} className="form-control" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" name="password" id="password" onChange={passwordChangeHandler} value={details.password} className="form-control" placeholder="Enter password" />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox"></div>
            </div>
            <div className="mb-3">
              <input type="checkbox" name="staffYesNo" id="staffYesNo" onChange={staffYesNoChangeHandler} value={details.staffYesNo} /> &nbsp;
              <label>Are you a staff?</label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={console.log(writtenEmail, writtenPassword, staffYesNo)} >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
