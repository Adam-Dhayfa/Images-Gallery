import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./favicon-32x32.png";

const navStyle = {
  backgroundColor: "#3D0000",
};

const Header = ({ title }) => {
  return (
    <Navbar className="NavBar" style={navStyle} variant="dark" logo={logo}>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt={title}
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Collapse className="left_navlinks">
          <NavLink className="link" to="/About" >
            About
          </NavLink>
          <NavLink className="link" to="/" >
            Home
          </NavLink>
          <NavLink className="link" to="/Log_In" >
            Sign in
          </NavLink>
          <NavLink className="link" to="/Contact" >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
