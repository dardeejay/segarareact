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
import HomeGallery1 from "../assets/HomeGallery/1.jpg";
import HomeGallery1Hover from "../assets/HomeGallery/1Hover.jpg";
import HomeGallery2 from "../assets/HomeGallery/2.jpg";
import HomeGallery2Hover from "../assets/HomeGallery/2Hover.jpg";
import HomeGallery3 from "../assets/HomeGallery/3.jpg";
import HomeGallery3Hover from "../assets/HomeGallery/3Hover.jpg";
import HomeGallery4 from "../assets/HomeGallery/4.jpg";
import HomeGallery4Hover from "../assets/HomeGallery/4Hover.jpg";
import HomeGallery5 from "../assets/HomeGallery/5.jpg";
import HomeGallery6 from "../assets/HomeGallery/6.jpg";
import AboutSegara1 from "../assets/Home Page/about_banner.jpg";
import AboutSegara2 from "../assets/Home Page/about_banner2.jpg";
import SegaraLogo from "../assets/SegaraHotels.png";
import { Row } from "react-bootstrap";

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
        <div className="HomeSwiper-container">
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
              <img src={HomeSlide1} alt="slider1" className="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HomeSlide2} alt="slider2" className="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HomeSlide3} alt="slider3" className="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HomeSlide4} alt="slider4" className="" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Divider */}
        <div className="divider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center mb-5">
                <h1>Asian Spices Bar and Restaurant</h1>
                <h5>―</h5>
                <p>
                  An elegant and earthy spot for casual chic dining in the Subic
                  Bay area. Tickle and gratify your taste buds with delectable
                  Indonesian, Thai, Filipino, and Malaysian cuisines. Using only
                  the best garden produce and ingredients, spices, herbs, herbs
                  and authentic seasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Resto */}
        <section id="gallery" class="gallery_wrapper">
          <div class="container">
            <div class="row g-0">
              <div class="col-lg-3 col-sm-3 gallery-item">
                <img src={HomeGallery1} className="img-fluid w-100" />
                <div class="gallery-item-content">
                  <img src={HomeGallery1Hover} className="img-fluid w-100" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 gallery-item optionalcontent">
                <img src={HomeGallery2} className="img-fluid w-100" />
                <div class="gallery-item-content">
                  <img src={HomeGallery2Hover} className="img-fluid w-100" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 gallery-item optionalcontent">
                <img src={HomeGallery3} className="img-fluid w-100" />
                <div class="gallery-item-content">
                  <img src={HomeGallery3Hover} className="img-fluid w-100" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 gallery-item optionalcontent">
                <img src={HomeGallery4} className="img-fluid w-100" />
                <div class="gallery-item-content">
                  <img src={HomeGallery4Hover} className="img-fluid w-100" />
                </div>
              </div>
              <div class="col-sm-6 gallery-item optionalcontent">
                <img src={HomeGallery5} className="img-fluid w-100" />
                <div class="gallery-item-content"> </div>
              </div>
              <div class="col-sm-6 gallery-item">
                <img src={HomeGallery6} className="img-fluid w-100" />
                <div class="gallery-item-content"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="divider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Know More About Us</h1>
                <h5>―</h5>
              </div>
            </div>
          </div>
        </div>
        {/*  About Segara */}
        <div className="container-fluid">
          <div className="row gy-1 flex-lg-row align-items-center justify-content-center">
            <div className="col-sm-4">
              <img
                src={AboutSegara1}
                className="img-fluid w-100 optionalcontent"
              />
            </div>
            <div className="col-sm-4 text-center aboutSegaraText mb-4">
              <p>
                It is our sole purpose at Segara Villas to make your visit an
                unforgettable one. Our professional and gracious staff will
                certainly make you feel like you've found a home away from home
              </p>
              <h3 className="">SEGARA HOTELS</h3>
            </div>
            <div className="col-sm-4">
              <img src={AboutSegara2} className="img-fluid w-100" />
            </div>
          </div>
        </div>
        {/* About Segara 2 */}
        <section className="about_wrapper">
          <div class="container">
            <div class="row flex-lg-row flex-column-reverse align-items-center justify-content-center">
              <div class="col-lg-6 text-center text-lg-start">
                <p>
                  Segara Hotels was created to offer luxurious accommodations
                  for special moments. With our hands-on approach to
                  hospitality, we aim to give every guest a personalized and
                  memorable stay.
                </p>
              </div>
              <div class="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
                <img src={SegaraLogo} className="img-fluid w-50" />
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="divider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>How to get there</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="container pb-10">
          <div className="row flex-lg-row align-items-center justify-content-center">
            <div className="MapContainer text-center">
              <iframe
                width="100%"
                height="280"
                src="https://maps.google.com/maps?q=segara%20villas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
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
