import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/navabar.js'
import image_center from './man-holding-phone-edit.svg';
import './login.css'
function login() {
    return(
        <div>
        <Navbar />

    


      <h1 className="heading">Signup Now!</h1>

      <p className="paragraph-2">Apply to join the Ichat.io Network.<br />
       We are even looking for Contributers For this Project project across the planet<br />
      </p>

      

      <img
        src={image_center}
        width="800"
        height="800"
        className="d-inline-block align-top img-1 "
        alt="React Bootstrap logo"
      />

      <a className="button-2 sign-in-styles">Login</a>

     

        </div>


    
        
    )

}

export default login;