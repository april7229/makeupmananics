import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
        <div className = "header">
        
          <div className="container-fluid"></div>
          <div>className = "container"></div>
          <div className="container-fluid sticky-top"></div>
          <div className = "container"></div>
          <div className = "d-flex justify-content-end"></div>
          <div className=" navbar navbar-expand-lg navbar-light bg-light"></div>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li classNamae="navbar-nav">
                <a className="nav-item active">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#"> Product Line</a>
              </li>

            </ul>
          </div>
          </div>
         
    
  
        
          
     
    );
  }
}

export default App;
