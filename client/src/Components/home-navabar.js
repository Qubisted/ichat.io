import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarBrand, Container,Nav } from 'react-bootstrap';
import logo from '../Components/head.svg';

function homeNav(){
    return(
        <Navbar>
        <Container>
            <NavbarBrand>
                {/* Image designed with fighma */}
                <img
        src={logo}
        width="150"
        height="150"
        className="d-inline-block align-top  "
        alt="React Bootstrap logo"
      />
                
            </NavbarBrand>
        </Container>
    </Navbar>
    )


}

export default homeNav;
