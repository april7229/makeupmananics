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
  
      <div class ="container">
        <div class="row justify-content-center">
          <div class="col-sm-12">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="img/slider-1.jpg" alt="Earth's atmosphere" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slider-2.jpg" alt="The Milky Way" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slider-3.jpg" alt="Satellite" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slider-4.jpg" alt="The Moon" />
                </div>
              </div>
          
             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>}
  
      </div>
    
  }

}



export default App;
