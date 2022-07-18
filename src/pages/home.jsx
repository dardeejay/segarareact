import React, { Component } from "react";
import BackgroundImage from "../assets/HomePage.jpg";
import Video from "../assets/Segara Hotels Subic - Promotional Video.mp4";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HomeSlide1 from "../assets/HomeSwipe/1.jpg";
import HomeSlide2 from "../assets/HomeSwipe/2.jpg";
import HomeSlide3 from "../assets/HomeSwipe/3.jpg";
import HomeSlide4 from "../assets/HomeSwipe/4.jpg";

class Home extends Component {
  state = {};
  style = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Video */}
        <section id="home" className="banner_wrapper p-0">
          <div className="video-container">
            <video src={Video} autoPlay="true" loop="true" muted="true" />
          </div>
        </section>
        {/* Divider */}
        <div className="divider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center mb-5">
                <h3>A TRULY LUXURIOUS UNFORGETTABLE STAY</h3>
                <h5>―</h5>
                <h1>VILLAS • SUITES • RESIDENCIAS</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Swiper */}
        <Swiper
          modules={[EffectFade, Pagination, Navigation, Autoplay]}
          effect="fade"
          autoplay={(true, { disableOnInteraction: false })}
          speed={800}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop
          className="HomeSwiper"
        >
          <SwiperSlide className="HomeSwiperSlide">
            <img src={HomeSlide1} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HomeSlide2} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HomeSlide3} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HomeSlide4} alt="" className="" />
          </SwiperSlide>
        </Swiper>
        {/* Swiper */}
        <section id="home" className="banner_wrapper p-0"></section>

        {/*
        <section id="home" className="banner_wrapper p-0">
          <div className="HomeContainer">
            <div className="swiper-wrapper">
              <div className="HomeContent" style={this.style}>
                <div className="Home-caption text-center">
                  <div>
                    <h1>Segara Hotels</h1>
                    <div className="home-text-container">
                      <p>
                        Segara Villas and Suites is a serene boutique hotel
                        located in a secluded area of Subic Bay. Decorated in
                        modern Asian design, the stylish lodgings are housed in
                        a peaceful private compound, providing a welcome break
                        from hectic city life. Sophisticated interiors showcase
                        Balinese accents combined with contemporary yet homey
                        touches.
                      </p>
                    </div>
                    <a className="main-btn" href="/">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </motion.div>
    );
  }
}

export default Home;
