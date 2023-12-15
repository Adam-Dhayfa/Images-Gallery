import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useState } from "react";

const divStyles = {
  boxShadow: "2px 2px 100px #950101",
  margin: "1em",
  padding: "1em",
};

export default function Log_In(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted)
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(document.forms[0]);

    var uname = document.getElementsByName("uname")[0];
    var pass = document.getElementsByName("pass")[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
<div className="Auth-form-container text-white">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-white">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            {renderErrorMessage("uname")}
            <input
              name="uname"
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="pass"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
            {renderErrorMessage("pass")}
          </div>
          <div className="form-bt d-grid gap-2 mt-3">
            <Button type="submit" className="btn">
              Submit
            </Button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/Login">password?</a>
          </p>
        </div>
      </form>
    </div>
  );

  return (
    <Container className="mt-4 LogBox">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
      <div className="LogBox row align-items-md-stretch" style={divStyles}>
          <div class="p-5 mb-4 rounded-3">
            <div className="h-100 p-5 text-black bg-dark rounded-3">
              <div className="login-form bg-dark">
                {isSubmitted ? (
                  <div className="text-white">User is successfully logged in</div>
                ) : (
                  renderForm
                )}
              </div>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}