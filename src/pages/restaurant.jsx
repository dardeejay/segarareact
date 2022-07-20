import React, { Component } from "react";
import { motion } from "framer-motion";
import "../styles/restaurant.scss";
import restoLogo from "../assets/restaurant/restologowhite.png";
class Restaurant extends Component {
  state = {};
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* RestaurantTitle */}
        <div className="container-fluid resto_ts_wrapper">
          <div className="blur_container"></div>
          <div className="row justify-content-center ">
            <div className="col-md-4 py-5 text-center resto_ts_content">
              <img
                src={restoLogo}
                alt="AsianSpicesLogo"
                className="img-fluid"
              />
              <a className="main-btn menu-btn" href="/restaurant/menu">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
        <div className="resto-divider">
          <div className="container-fluid">
            <p>Experience</p>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Restaurant;
