import React from 'react'
import './home.css'
import HomeNav from '../Components/home-navabar.js'

function homePage(){
    return(
        <div id="Header-items">
         <HomeNav />

        <h1 className="heading-1 font-semibold padding-1rem">Welcome To Ichat.io</h1>

    </div>

    )
    

}

export default homePage;