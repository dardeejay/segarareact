import React, { Component } from "react";
import about_us_Background from "../assets/About_Us.jpg";
import "../styles/about-us.scss";
class AboutUs extends Component {
  state = {};
  style = {
    backgroundImage: `url(${about_us_Background})`,
  };

  render() {
    return (
      <div>

      <div>
        <div className="about_us">
          <div className="about_us_container" style={this.style}>
            <div className="about_us_container_text">
              <h1>KNOW MORE ABOUT US</h1>
              <h4>Segara Villas, Suites & Residencias</h4>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default AboutUs;
