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
            <div className="col-sm-3 py-5">
              <img src={restoLogo} alt="" className="img-fluid" />
              <a></a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Restaurant;
