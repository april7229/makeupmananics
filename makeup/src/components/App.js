import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <div className="header">

      <div className="wrapper">
        <nav>
          <div className="logo">
            <img src="image/Logo.jpg" alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">What's New?!</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Upcoming</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a className="active" href="/signin.js">
                SignIn
            </a>
            </li>
            <li>
              <a href="#">Shopping Cart</a>
            </li>
          </ul>
        </nav>
        </div>
        </div>

  }

}

export default App;
