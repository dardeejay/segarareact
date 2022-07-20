import React from "react";
import menu1 from "../../assets/restaurant/menu/1.png";
import menu2 from "../../assets/restaurant/menu/2.png";
import menu3 from "../../assets/restaurant/menu/3.png";
import menu4 from "../../assets/restaurant/menu/4.png";
import menu5 from "../../assets/restaurant/menu/5.png";
import menu6 from "../../assets/restaurant/menu/6.png";
import { motion } from "framer-motion";
function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contain-fluid">
        <div
          className="row justify-content-center m-0"
          style={{ width: "100%" }}
        >
          <div className="col-md-5 col-12">
            <img src={menu1} alt="" className="img-fluid" />
          </div>
          <div class="w-100"></div>
          <div className="col-md-5 col-12">
            <img src={menu2} alt="" className="img-fluid" />
          </div>
          <div class="w-100"></div>
          <div className="col-md-5 col-12">
            <img src={menu3} alt="" className="img-fluid" />
          </div>
          <div class="w-100"></div>
          <div className="col-md-5 col-12">
            <img src={menu4} alt="" className="img-fluid" />
          </div>
          <div class="w-100"></div>
          <div className="col-md-5 col-12">
            <img src={menu5} alt="" className="img-fluid" />
          </div>
          <div class="w-100"></div>
          <div className="col-md-5 col-12">
            <img src={menu6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
