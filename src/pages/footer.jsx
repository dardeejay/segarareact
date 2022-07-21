import React, { Component } from "react";
import "../styles/footer.scss";
import segaraLogo from "../assets/SegaraHotels.png";
import tripdAdvisorTemp from "../assets/tripadvisor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tripAdvisorLogo from "../assets/tripadvisor.ico";
function Footer() {
  return (
    <div className="footer-wrapper container">
      {/* segara logo section */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6 col-lg-3">
            <img src={segaraLogo} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container  footer-text">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4">
            <h3>Our address</h3>
            <h5>Segara Hotels Subic</h5>
            <div className="row">
              <div className="col-1">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              </div>
              <div className="col-11">
                <p>
                  Segara Suites Main Building, Washington St, Subic Bay Freeport
                  Zone, Zambales
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <h3>Contact Us</h3>
            <h5>For Rooms and Bookings</h5>
            <div className="row g-0 mb-2">
              <div className="col-1">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </div>
              <div className="col-11">09088142438</div>
              <div className="col-1">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </div>
              <div className="col-11">reservations@subicsegaravillas.com</div>
            </div>
            <h5>For Events</h5>
            <div className="row mb-5">
              <div className="col-1">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </div>
              <div className="col-11">09177955965</div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img src={tripdAdvisorTemp} alt="placeholderlangto" />
          </div>
        </div>
      </div>
      {/* <div className="footer-end">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3">
              <p>© Copyright Segara Hotels</p>
            </div>
            <div className="col-3">
              <div className="row text-center justify-content-center">
                <div className="col-12">Follow Us</div>
                <div className="col-2">
                  <p>
                    <FontAwesomeIcon icon="fa-brands fa-facebook-square fa-lg" />
                  </p>
                </div>
                <div className="col-2">
                  <p>
                    {" "}
                    <FontAwesomeIcon icon="fa-brands fa-instagram fa-lg" />
                  </p>
                </div>
                <div className="col-2 ">
                  <img src={tripAdvisorLogo} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-3">
              <p>Contact Us Terms and Condition</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
