import React from 'react';
import login from './Pages/Login.js'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from'./Pages/home.js'

function App() {
  return (   
    <Router>
          <Route exact strict path="/"  component={login}/>
          <Route exact strict path="/home" component={Home} />

    </Router>
  
  )
  }

export default App;
