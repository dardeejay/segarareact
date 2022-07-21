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
        <div className="row justify-content-between text-center text-lg-start">
          <div className="col-12 col-lg-4">
            <h3>Our address</h3>
            <h5>Segara Hotels Subic</h5>
            <div className="row">
              <div className="col-12">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  &nbsp; Segara Suites Main Building, Washington St, Subic Bay
                  Freeport Zone, Zambales
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <h3>Contact Us</h3>
            <h5>For Rooms and Bookings</h5>
            <div className="row g-0 mb-2">
              <div className="col-12">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  &nbsp; 09088142438
                </p>
              </div>

              <div className="col-12">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  &nbsp; reservations@subicsegaravillas.com
                </p>
              </div>
            </div>
            <h5>For Events</h5>
            <div className="row mb-5">
              <div className="col-12">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                  &nbsp; 09177955965
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img src={tripdAdvisorTemp} alt="placeholderlangto" />
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="container">
          <div className="row justify-content-between text-center text-lg-start">
            <div className="col-lg-3 col-sm-12">
              <p>© Copyright Segara Hotels</p>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="row text-center justify-content-center">
                <div className="col-12">
                  <p>Follow Us</p>
                </div>
                <div className="col-2 mt-1">
                  <a
                    href="https://www.facebook.com/SegaraHotels/"
                    style={{ color: "black" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-facebook-square fa-lg" />
                  </a>
                </div>
                <div className="col-2 mt-1">
                  <a
                    style={{ color: "black" }}
                    href="https://www.instagram.com/segarahotels/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-instagram fa-lg" />
                  </a>
                </div>
                <div className="col-2 ">
                  <a
                    href="https://www.tripadvisor.com.ph/Hotel_Review-g4751237-d4176944-Reviews-Segara_Suites-Subic_Bay_Freeport_Zone_Bataan_Province_Central_Luzon_Region_Luzon.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tripAdvisorLogo} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 terms-and-condition d-flex justify-content-around">
              <p>Contact Us</p>

              <p>Terms and Condition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
