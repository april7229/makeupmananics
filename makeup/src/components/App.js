import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <div className="header">
    
      <div className="wrapper">
        <nav>
          <div className="logo">
            <img src ="image/Logo.jpg" alt="logo" />
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
        <section className="sec1" />
        {/* <section class="content">
         Weather factors and postal delivery procedures are not in our
          control. Once items are shipped, we no longer have access to the
          physical products. When you receive an email containing a tracking
          number, allow at least 24 hours to see transit/movement status. We
          are not responsible for lost or stolen items, or damages incurred by
          the USPS. Please contact the USPS regarding concerns about your
          package. Returns and refunds will be provided sans shipping costs,
          as we do not charge a typical re-stocking fee of products/inventory
          returned by the USPS for delivery failures.
      </section> */}
      </div>
      </div>
  }
        
    }
    
    export default App;
