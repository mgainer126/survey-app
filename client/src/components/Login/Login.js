// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import React, { useState } from "react";
import useToken from "../../components/App/useToken";
import StatsPage from "../../pages/StatsPage/StatsPage";
import axios from "axios";
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

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { token, setToken } = useToken();

  if (token) {
    return <StatsPage />;
  }

  //Caputues the username and password entered on the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/validate/credentials")
      .then(function (response) {
        let credentialArr = response.data;
        const locateCred = credentialArr.filter(
          (credential) => email === credential.email
        );
        console.log(locateCred[0].password === password);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    //Do api call do the data base with the email address and password provided, if the return is sucesfull than to and set the token in the next step
    // const token = await loginUser({
    //   //wait for the info, then call the loginUser api call in line 7
    //   email,
    //   password,
    // });
    // console.log(token);
    // setToken(token); //this sets the token from the API call and puts it into session storage
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

export default Login;

//What does this do?
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
