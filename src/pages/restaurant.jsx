import React, { Component } from "react";
import { motion } from "framer-motion";
import "../styles/restaurant.scss";
import restoLogo from "../assets/restaurant/restologonewwhite.png";
import restoDetail1 from "../assets/restaurant/restodetail1.jpg";
import restoDetail2 from "../assets/restaurant/restodetail1.1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

class Restaurant extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    Aos.init({
      // initialise with other settings
      duration: 900,
    });
  }
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* RestaurantTitle */}
        <div className="container-fluid restoBanner">
          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-6 col-10 col-lg-5 col-xxl-3 text-center restoBannerColumn">
              <img
                src={restoLogo}
                alt="restoLogo"
                className="restoBannerLogo img-fluid "
              />
              <a href="/restaurant/menu" className="main-btn-events menu_btn">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center my-5 divider-container">
          <p data-aos="fade-up">
            Relish in the diversity of Asian cuisine as your palate travels from
            Thailand, to Malaysia, to Indonesia and the Philippines, all found
            in one #SegaraSpices
          </p>
        </div>
        {/* RestaurantDetail1 */}
        <div className="container resto-detail1-container">
          <div className="row  resto-detail1-content justify-content-between">
            <div
              data-aos="fade-up"
              data-aos-offset="450"
              data-aos-duration="1200"
              className="col-md-4 resto-detail1-img"
            >
              <img src={restoDetail1} alt="" className="img-fluid" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1500"
              className="col-md-5 resto-detail1-text my-2 "
            >
              <h1>Segara Hotels Breakfast</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur magnam sunt ipsam in, provident nisi dolores nemo
                itaque laborum nam qui error quos mollitia? Quasi fuga fugiat
                provident esse neque.
              </p>
            </div>
          </div>
        </div>
        {/* RestaurantDetail2 */}
        <div className="container resto-detail2-container">
          <div className="row resto-detail2-content justify-content-between">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="1500"
              className="col-md-5 resto-detail2-text my-2 "
            >
              <h1>Segara Hotels Breakfast</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur magnam sunt ipsam in, provident nisi dolores nemo
                itaque laborum nam qui error quos mollitia? Quasi fuga fugiat
                provident esse neque.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="450"
              data-aos-duration="1500"
              className="col-md-4 resto-detail2-img"
            >
              <img src={restoDetail2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* RestaurantDetail3 */}
        <div className="container resto-detail3-container">
          <div className="row resto-detail3-content justify-content-between">
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1500"
              className="col-md-4 resto-detail3-img"
            >
              <img src={restoDetail1} alt="" className="img-fluid" />
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-offset="350"
              className="col-md-5 resto-detail3-text my-2 "
            >
              <h1>Segara Hotels Breakfast</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur magnam sunt ipsam in, provident nisi dolores nemo
                itaque laborum nam qui error quos mollitia? Quasi fuga fugiat
                provident esse neque.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Restaurant;
