import React, { Component } from "react";
import BackgroundImage from "../assets/HomePage.jpg";
import "../style.scss";
class Home extends Component {
  state = {};
  style = {
    backgroundImage: `url(${BackgroundImage})`,
  };
  render() {
    return (
      <section id="home" className="banner_wrapper p-0">
        <div className="HomeContainer">
          <div className="swiper-wrapper">
            <div className="HomeContent" style={this.style}>
              <div className="Home-caption text-center">
                <div>
                  <h1>Segara Hotels</h1>
                  <div className="home-text-container">
                    <p>
                      Segara Villas and Suites is a serene boutique hotel
                      located in a secluded area of Subic Bay. Decorated in
                      modern Asian design, the stylish lodgings are housed in a
                      peaceful private compound, providing a welcome break from
                      hectic city life. Sophisticated interiors showcase
                      Balinese accents combined with contemporary yet homey
                      touches.
                    </p>
                  </div>
                  <a className="main-btn" href="#">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
