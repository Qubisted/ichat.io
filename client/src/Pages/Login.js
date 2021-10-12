import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/navabar.js'
import image_center from './hero-1.jpg';
import './login.css'
function login() {
    return(
        <div>
        <Navbar />

        <img
        src={image_center}
        width="800"
        height="800"
        className="d-inline-block align-top img-1 "
        alt="React Bootstrap logo"
      />






        </div>


    
        
    )

}

export default login;