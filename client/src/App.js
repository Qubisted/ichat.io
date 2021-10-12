import React from 'react';
import login from './Pages/Login.js'
import './App.css';
import Home from'./Pages/home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Container,Nav } from 'react-bootstrap';
import logo from './Components/head.svg';


function App() {
  return (   
    <div className="root bg-blue">
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


    </div>






  )
  }

export default App;
