import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarBrand, Container,Nav } from 'react-bootstrap';
import './navbar.css'
import logo from './head.svg'
function nav() {
    return(
        <Navbar>
  <Container>


    {/* <Navbar.Brand id="nav-link">IChat</Navbar.Brand> */}

    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="150"
        height="150"
        className="d-inline-block align-top  "
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>

      {/* Sign in button */}

    <a  className="nav-link sign-in-styles">Sign in</a>

    {/* Waitlist button */}
    <a className="button w-button">Join Waitlist</a>

  </Container>
</Navbar>
  
 

    )
}

export default nav;