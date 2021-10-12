import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarBrand, Container,Nav } from 'react-bootstrap';
import logo from '../Components/head.svg'
export default function homenavabar() {
    return (
        <div className="root-navbar">
            <Navbar>
                <Navbar.Brand>
                <img
        src={logo}
        width="150"
        height="150"
        className="d-inline-block align-top  "
        alt="React Bootstrap logo"
      />

                </Navbar.Brand>
            </Navbar>

        </div>
    )
}
