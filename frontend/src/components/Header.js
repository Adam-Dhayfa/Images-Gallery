import React from "react";
import {Container} from "react-bootstrap"
import { Navbar } from 'react-bootstrap'

const navStyle ={
  backgroundColor:'#555555'
}

const Header = ({title}) =>{
    return (
    <Navbar style={navStyle} variant="dark">
    <Container>
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Container>
  </Navbar>)
}

export default Header;