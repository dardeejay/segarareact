import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../styles/events.scss";
import event2Pic1 from "../assets/pics/event2.jpg";
import event1Pic from "../assets/Luxury-Cruise/luxurycruise1.jpg";
import event1Pic2 from "../assets/Luxury-Cruise/luxurycruise2.jpg";
import event1Pic3 from "../assets/Luxury-Cruise/luxurycruise3.jpg";
import event1Pic4 from "../assets/Luxury-Cruise/luxurycruise4.jpg";
import event1Pic5 from "../assets/Luxury-Cruise/luxurycruise5.jpg";
import event1Pic6 from "../assets/Luxury-Cruise/luxurycruise6.jpg";
import event1Pic7 from "../assets/Luxury-Cruise/luxurycruise7.jpg";
import event1Pic8 from "../assets/Luxury-Cruise/luxurycruise8.jpg";
import event1Pic9 from "../assets/Luxury-Cruise/luxurycruise9.jpg";
import event1Pic10 from "../assets/Luxury-Cruise/luxurycruise10.jpg";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function Events() {
  Aos.init({
    // initialise with other settings
    once: true,
    ease: "ease-in-sine",
    duration: 900,
  });

  const pics = {
    luxuryCruise1: "../assets/Luxury-Cruise/luxurycruise1.jpg",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*FrontPage*/}
      <div className="events_frontPage container-fluid">
        <div className="row">
          <div className="events_frontPage_container">
            <div className="events_frontPage_container_text">
              <h1 className="display-1">#SegaraExperience</h1>
            </div>
          </div>
        </div>
      </div>
      {/*Divider*/}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container-fluid events_divider1"
      >
        <div className="row">
          <div className="col-sm-12 text-center mb-5 divider_text">
            <h1>MAKE MEMORIES</h1>
            <h5>―</h5>
            <h3>Celebrate what's important to you at our function room</h3>
          </div>
        </div>
      </div>
      {/*Seasonal Events*/}
      <div className="events_container container-fluid ">
        <div className="row gy-1">
          <div className="col-md-4 event1 event_column">
            <div className="event1_container container-fluid text-center">
              <div className="events_text_container ">
                <h2>WEDDINGS</h2>
                <h3>
                  The moment you've always dreamed of, made more magical with
                  us!
                </h3>
              </div>
              <a className="main-btn-events eventInquireButton" href="/">
                Inquire
              </a>
            </div>
          </div>
          <div className="col-md-4 event2 event_column ">
            <div className="event2_container container-fluid  text-center">
              <div className="events_text_container ">
                <h2>BIRTHDAYS</h2>
                <h3>Grateful for another year with you at Segara Hotels!</h3>
              </div>
              <a className="main-btn-events eventInquireButton" href="/">
                Inquire
              </a>
            </div>
          </div>
          <div className="col-md-4 event3 event_column">
            <div className="event3_container container-fluid  text-center">
              <div className="events_text_container ">
                <h2>CORPORATE EVENTS</h2>
                <h3>
                  Forming bonds and friendships as we achieve our dreams
                  together!
                </h3>
              </div>
              <a className="main-btn-events eventInquireButton" href="/">
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Seasonal Events*/}
      <div className="seasonal_event1 container-fluid">
        <div className="seasonal_event1_container row justify-content-between">
          <div className="col-md-5 sec1_text">
            <div data-aos="fade-right" className="row gy-0">
              <div className="col-md-12 p-5">
                <h1>Luxury Dine &amp; Cruise</h1>
              </div>
              <div className="col-md-12 px-5">
                <p>
                  Make your #SegaraExperience worthwhile and enjoy the stunning
                  sunset of Subic Bay! Book your luxury yacht cruise and let our
                  Chef’s and butler waiters provide you our personalized service
                </p>
              </div>
              <div className="col-md-12 px-5">
                <a className="main-btn-rooms eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 sec1_img ">
            <Swiper
              modules={[EffectFade, Autoplay]}
              autoplay={
                (true, { disableOnInteraction: false }, { delay: 1000 })
              }
              effect="fade"
              speed={800}
              slidesPerView={1}
              loop
              className="swiper-container"
            >
              <SwiperSlide>
                <img src={event1Pic} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic2} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic3} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic4} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic5} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic6} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic7} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic8} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic9} alt="gaming" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={event1Pic10} alt="gaming" className="img-fluid" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*Seasonal events2*/}
      <div className="seasonal_event2 container-fluid">
        <div className="seasonal_event1_container row justify-content-between">
          <div className="col-md-6 sec2_img">
            <img
              src={event2Pic1}
              alt="anniversary package"
              className="img-fluid event2im"
            />
          </div>
          <div className="col-md-5 sec2_text">
            <div data-aos="fade-up" className="row gy-0">
              <div className="col-md-12 p-5">
                <h1>Anniversary Celebration Package</h1>
              </div>
              <div className="col-md-12 px-5">
                <p>
                  &nbsp; How do you want to surprise her for your upcoming
                  anniversary? Running out of ideas? Worry no more! We’re to
                  help you! Let our team arrange everything for you.
                </p>
              </div>
              <div className="col-md-12 px-5">
                <a className="main-btn-rooms eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Events;
