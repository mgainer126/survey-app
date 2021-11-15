import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useToken from "../../components/App/useToken";
import axios from "axios";
import "./Login.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Manager Log In Sucesfull
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Employee Survey</h4>
          <p>Please select proceed to go to the employee survey results</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/stats">
            <Button onClick={props.onHide}>Proceed</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function MyVerticallyCenteredModalNot(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Incorrect Username and/or Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>User Name and/or Password Incorrect Please Try Again</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { token, setToken } = useToken();
  const [modalShow, setModalShow] = React.useState(false);

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
        return verify;
      })
      .then((res) => {
        if (res === true) {
          axios.get("http://localhost:8080/login").then((res) => {
            let token = res.data;
            setToken(token);
            console.log("Sucesfull Username and Password");
          });
        }
      })
      .catch((error) => {
        console.log(error, "Incorrect Username or Password Entered");
      });
  };

  return (
    <div className="login-wrapper">
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
            <Button
              variant="primary"
              type="submit"
              onClick={() => setModalShow(true)}
            >
              Submit
            </Button>
            {token && (
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            )}
            {!token && (
              <MyVerticallyCenteredModalNot
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            )}
          </div>
        </form>
      </>
    </div>
  );
}

export default Login;

//What does this do?
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
