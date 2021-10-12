import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarBrand, Container,Nav } from 'react-bootstrap';
import logo from '../Components/head.svg';
import './home-navbar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from '../Pages/home.js'
function homeNav(){
    return(
        <Router>
            {/* Route paths for navbars */}

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



    </Router>
    )


}

export default homeNav;
