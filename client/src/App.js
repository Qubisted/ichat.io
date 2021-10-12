import React from 'react';
import login from './Pages/Login.js'
import './App.css';
import Home from'./Pages/home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (   
    // Routes
    <Router>
      {/* <Link to={'/login'}>
      <button> Click Me </button>

    </Link> */}
      <Route exact path = '/' component={Home}></Route>
      <Route path='/login' component={login}></Route>
    </Router>




  )
  }

export default App;
