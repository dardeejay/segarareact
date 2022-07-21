import React, { Component } from "react";
import { motion } from "framer-motion";
import "../styles/rooms&rates.scss";
import VillasImg from "../assets/Villas.jpg";
import SuitesImg from "../assets/Suites.jpg";
import ResidenciasImg from "../assets/Residencias.jpg";

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
                <h1 className="display-1">LUXURIOUS STAY</h1>
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
          <div className="RoomsandRatesMain container-fluid">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="col-md-6 sec1_text order-sm-2 order-lg-1">
                <div className="row gy-0">
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
                  <a className="main-btn-rooms" href="/">
                    Book a Villa
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center order-sm-1">
                <img
                  src={VillasImg}
                  alt="anniversary package"
                  className="Roomsimg"
                />
              </div>
            </div>
          </div>
          <div className="RoomsandRatesMain container-fluid">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="col-lg-6 text-center order-sm-1">
                <img
                  src={SuitesImg}
                  alt="anniversary package"
                  className="Roomsimg"
                />
              </div>
              <div className="col-md-6 sec1_text order-sm-2 order-lg-1">
                <div className="row gy-0">
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
          <div className="RoomsandRatesMain container-fluid">
            <div className="RoomsandRatesMain_container row flex-lg-row">
              <div className="col-md-6 sec1_text order-sm-2 order-lg-1">
                <div className="row gy-0">
                  <div className="col-md-6 p-5">
                    <h1>Residencias</h1>
                  </div>
                  <div className="col-md-12 px-5">
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
                  alt="anniversary package"
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
          <div className="ameneties row flex-lg-row">
            <div className="col-sm-4 text-center">
              <h3>Pool</h3>
              <h3>Free parking</h3>
              <h3>Outdoor dining area</h3>
              <h3>Free breakfast</h3>
            </div>
            <div className="col-sm-4 text-center">
              <h3>King size luxury bed</h3>
              <h3>Wooden flooring</h3>
              <h3>Hot and cold water</h3>
              <h3>Laundry service</h3>
            </div>
            <div className="col-sm-4 text-center">
              <h3>Large balcony</h3>
              <h3>Free Wi-Fi</h3>
              <h3>Air conditioning</h3>
              <h3>Non-smoking hotel</h3>
            </div>
          </div>
        </div>
        {/* Bottom page Images */}
      </motion.div>
    );
  }
}

export default RoomsAndRates;
