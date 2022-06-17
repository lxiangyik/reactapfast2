import React, { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Switch changes into Routes
function App() {
  const adminUser = { email: "admin@admin.com", password: "admin" };

  const [user, setUser] = useState({ name: "", email: "", staffYesNo: "" });
  const [error, setError] = useState("");

  const userLogIn = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({ name: details.name, email: details.email });
    } else {
      setError("Incorrect credentials");
    }
  };

  const userLogOut = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/sign-in"
            element={
              <SignIn
                user={user}
                userLogIn={userLogIn}
                userLogOut={userLogOut}
                error={error}
              />
            }
          />
          <Route path="/dashboard" />
          <Route path="/timetable" />
          <Route path="/attendance" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
