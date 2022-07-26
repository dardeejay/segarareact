import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact-us.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import slider1 from "../assets/contact-us-slider/1.jpg";
import slider2 from "../assets/contact-us-slider/2.jpg";
import slider3 from "../assets/contact-us-slider/3.jpg";
import slider4 from "../assets/contact-us-slider/4.jpg";
import slider5 from "../assets/contact-us-slider/5.jpg";
import slider6 from "../assets/contact-us-slider/6.jpg";
import slider7 from "../assets/contact-us-slider/7.jpg";
import slider8 from "../assets/contact-us-slider/8.jpg";
import slider9 from "../assets/contact-us-slider/9.jpg";
import ReactWeather, { useWeatherBit } from "react-open-weather";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_vw9yhlg", form.current, "n2unFpBuyeReh7sGG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "ab40fc61175f4bc7a36b7ee097b4a674	",
    lat: "14.814729",
    lon: "120.284895",
    lang: "en",
    unit: "M", // values are (M,S,I)
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-us-wrapper"
    >
      <div className="contact-us-banner container-fluid">
        <div className="row contact_us_container  ">
          <div className="col-12 contact-us-banner-text d-flex flex-column justify-content-center align-items-lg-start align-items-center">
            <h1>Connect With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptatibus, ut, est illum dignissimos repellat ex illo eveniet
              sapiente totam recusandae odit unde nemo accusantium neque
              voluptas fuga explicabo modi.
            </p>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <div className="container form-container">
          <div className="row">
            <div className="col-12 col-lg-6 img-container">
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
                  <img className="img-fluid" src={slider1} alt="sliderimg1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider2} alt="sliderimg2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider3} alt="sliderimg3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider4} alt="sliderimg4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider5} alt="sliderimg5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider6} alt="sliderimg6" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider7} alt="sliderimg7" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider8} alt="sliderimg8" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src={slider9} alt="sliderimg9" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 col-lg-6 form_column my-2">
              <h1 style={{ color: "black" }}>Send us a message</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input type="text" name="name" className="form-control" />
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="emailInput"
                  />
                  <label>Message</label>
                  <textarea name="message" className="form-control" />
                  <input
                    type="submit"
                    value="Send"
                    className="main-btn-contact"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="maps-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 details-column">
              <div className="row">
                <div className="col-12">
                  <h1>Address</h1>
                  <p>
                    Segara Suites Main Building, Washington St, Subic bay
                    Freeport Zone, Zambales
                  </p>
                </div>
                <div className="col-12">
                  <h1>Phone Number</h1>
                  <p>+63 917-795-7965</p>
                </div>
                <div className="col-12">
                  <h1>Reservation</h1>
                  <p>sales.segarahotelssubic@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 maps-column">
              <iframe
                width="100%"
                height="280"
                src="https://maps.google.com/maps?q=segara%20villas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="segara villas"
              ></iframe>
            </div>
            {/* <div className="col-lg-4 col-12">
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Subic, Zambales"
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
              />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
