import React, { Component } from "react";
import { motion } from "framer-motion";
import "../styles/rooms&rates.scss";
import VillasImg from "../assets/Villas.jpg";
import SuitesImg from "../assets/Suites.jpg";
import ResidenciasImg from "../assets/Residencias.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RoomsAndRates extends Component {
  state = {};
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/*FrontPage*/}
        <div className="RoomsandRates_frontPage container-fluid">
          <div className="row">
            <div className="RoomsandRates_frontPage_container">
              <div className="RoomsandRates_frontPage_container_text">
                <h1>LUXURIOUS STAY</h1>
              </div>
            </div>
          </div>
        </div>
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
        {/*Rooms Container*/}
        <div>
          <div className="RoomsandRatesMain container-fluid d-flex justify-content-center">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="RoomsContainerText col-md-6 order-sm-2 order-lg-1 text-center">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <h1>Villas</h1>
                  </div>
                  <div className="col-md-12 px-5">
                    <p>
                      A grandiose abode inside Subic Bay that offers 10
                      luxurious villas for a peaceful accommodation. An
                      undisturbed boutique hotel that provides superb
                      personalized service and tremendous amenities.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 px-5 text-center">
                  <a className="main-btn-rooms" href="/rooms-and-rates/villas">
                    Book a Villa
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center order-sm-1">
                <img src={VillasImg} alt="Villas" className="Roomsimg" />
              </div>
            </div>
          </div>
          <div className="RoomsandRatesMain container-fluid d-flex justify-content-center">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="col-lg-6 text-center order-sm-1">
                <img src={SuitesImg} alt="Suites" className="Roomsimg" />
              </div>
              <div className="col-md-6 order-sm-2 order-lg-1 text-center">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <h1>Suites</h1>
                  </div>
                  <div className="col-md-12 px-5">
                    <p>
                      An 18-room luxury hotel for all types of travelers. Our
                      spacious rooms, pampering amenities and friendly services
                      will surely make your stay memorable and truly
                      revitalizing.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 px-5 text-center">
                  <a className="main-btn-rooms" href="/">
                    Book a Suite
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="RoomsandRatesMain container-fluid d-flex justify-content-center">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="col-md-6 order-sm-2 order-lg-1">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <h1>Residencias</h1>
                  </div>
                  <div className="col-md-12 px-5 text-center">
                    <p>
                      The newest Asian-Mexican themed hotel and condo in Subic
                      Bay. Offering more than 40 rooms, Segara Residencias is
                      very ideal for families, friends, and other big groups.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 px-5 text-center">
                  <a className="main-btn-rooms" href="/">
                    Book a Residencia
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center order-sm-1">
                <img
                  src={ResidenciasImg}
                  alt="Residencias"
                  className="Roomsimg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="divider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center mb-5">
                <h3>LUXURIOUS SERVICES FROM SEGARA HOTELS</h3>
                <h5>―</h5>
                <h1>ROOM FACILITIES</h1>
              </div>
            </div>
          </div>
        </div>
        {/* amenities */}
        <div className="amenities container-fluid">
          <div className="row flex-lg-row">
            <div className="col-sm-4 d-flex justify-content-center">
              <div className="amenitiesContainer">
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Pool
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Free parking
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Outdoor dining area
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Free breakfast
                </h3>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
              <div className="amenitiesContainer">
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  King Size Luxury Bed
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Wooden flooring
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Hot and cold water
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Laundry service
                </h3>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
              <div className="amenitiesContainer">
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Large balcony
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Free Wi-Fi
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Air conditioning
                </h3>
                <h3>
                  <FontAwesomeIcon
                    className="amenitiesIcon"
                    icon="fa-solid fa-circle-check"
                  />
                  Non-smoking hotel
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom page Images */}
      </motion.div>
    );
  }
}

export default RoomsAndRates;
