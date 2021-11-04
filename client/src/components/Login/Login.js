import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import React, { useState } from "react";
import useToken from "../../components/App/useToken";
import StatsPage from "../../pages/StatsPage/StatsPage";
import "./Login.scss";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { token, setToken } = useToken();

  if (token) {
    return <StatsPage />;
  }
  //Caputues the username and password entered on the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const token = await loginUser({
      //wait for the info, then call the loginUser api call in cline 7
      email,
      password,
    });
    console.log(token);
    setToken(token); //Not sure what this does, but believe it relates to line 55
  };

  return (
    <div className="login-wrapper">
      <h1>Manager Log In</h1>
      <form
        className="p-4 p-md-5 border rounded-3 bg-light login__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="floatingInput">
          <p>Email Address</p>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* This setUserName entered here will set the userName, that is then created as a token object in line 24   */}
        </label>
        <label htmlFor="floatingPassword">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            //this setPassword entered here will set the password, that is then created as part of the token object in line 24
          />
        </label>
        <div>
          <button
            type="submit"
            className="w-100 btn btn-lg btn-primary login__button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

//What does this do?
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
