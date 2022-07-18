import React, { Component } from "react";
import { motion } from "framer-motion";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Error 404 Page not Found!</h1>
      </motion.div>
    );
  }
}

export default ErrorPage;
