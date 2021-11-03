// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import React, { useState } from "react";

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

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //Caputues the username and password entered on the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const token = await loginUser({
      //wait for the info, then call the loginUser api call in cline 7
      username,
      password,
    });
    setToken(token); //Not sure what this does, but believe it relates to line 55
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          {/* This setUserName entered here will set the userName, that is then created as a token object in line 24   */}
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            //this setPassword entered here will set the password, that is then created as part of the token object in line 24
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

//What does this do?
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
