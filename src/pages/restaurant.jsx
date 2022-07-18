import React, { Component } from "react";
import { motion } from "framer-motion";

class Restaurant extends Component {
  state = {};
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Restaurant</h1>
      </motion.div>
    );
  }
}

export default Restaurant;
