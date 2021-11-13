import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useToken from "../../components/App/useToken";
import StatsPage from "../../pages/StatsPage/StatsPage";
import axios from "axios";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { token, setToken } = useToken();

  // if (token) {
  //   return <StatsPage />;
  // }

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
        const verify = locateCred[0].password === password;
        console.log(verify);
        return verify;
      })
      .then((res) => {
        console.log(res);
        if (res === true) {
          axios.get("http://localhost:8080/login").then((res) => {
            console.log(res.data);
            let token = res.data;
            setToken(token);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-wrapper">
      {token && (
        <>
          <h1>You Are Already Logged In</h1>
          <Link to="/stats">
            <h3>Click Here to Go to Stats Page</h3>
          </Link>
        </>
      )}
      {!token && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Login;

//What does this do?
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
