import React, { Component } from "react";
import about_us_Background from "../assets/About_Us.jpg";
import "../styles/about-us.scss";
import About_Segara_img from "../assets/pics/About_Logo.png";
import { motion } from "framer-motion";

class AboutUs extends Component {
  state = {};
  style = {
    backgroundImage: `url(${about_us_Background})`,
  };

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <div className="about_us">
            <div className="about_us_container" style={this.style}>
              <div className="about_us_container_text">
                <h1>KNOW MORE ABOUT US</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="about_us_wrapper">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center mb-5">
                <h5>The Segara Experience</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about_wrapper">
          <div class="container">
            <div class="row flex-lg-row">
              <div class="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
                <img
                  src={About_Segara_img}
                  alt="about_segara_img"
                  className="img-fluid"
                />
              </div>
              <div class="col-lg-6 text-center text-lg-start">
                <p>
                  Segara Hotels was created to offer luxurious accommodations
                  for special moments. With our hands-on approach to
                  hospitality, we aim to give every guest a personalized and
                  memorable stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default AboutUs;
