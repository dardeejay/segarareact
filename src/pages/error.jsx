import React from "react";
import { motion } from "framer-motion";
import logoSegara from "../assets/SegaraHotels.png";

function ErrorPage() {
  const imgstyle = {
    width: "30%",
    height: "30%",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={containerStyle}>
        <img src={logoSegara} alt="error" style={imgstyle} />
        <h1 style={{ color: "ActiveCaption" }}>ERROR 404 PAGE NOT FOUND!</h1>
      </div>
    </motion.div>
  );
}

export default ErrorPage;
