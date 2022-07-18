import React, { Component } from "react";
import { motion } from "framer-motion";
import logoSegara from "../assets/SegaraHotels.png";

class ErrorPage extends Component {
  imgstyle = {
    width: "30%",
    height: "30%",
  };
  containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  };
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div style={this.containerStyle}>
          <img src={logoSegara} alt="error" style={this.imgstyle} />
          <h1 style={{ color: "ActiveCaption" }}>ERROR 404 PAGE NOT FOUND!</h1>
        </div>
      </motion.div>
    );
  }
}

export default ErrorPage;
