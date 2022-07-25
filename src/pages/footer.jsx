import React from "react";
import "../styles/footer.scss";
import segaraLogo from "../assets/SegaraHotels.png";
import tripAdvisorLogo from "../assets/Tripadvisor_Logo_RGB.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

      <div className="container-fluid footer-header">
        <div className="row text-center">
          <div className="col-12">
            <h1>Contact Us</h1>
          </div>
          <div className="col-12">
            <p> Waterfront Road, Subic Bay Freeport Zone, Philippines, 2222</p>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-content">
        <div className="row gy-4 text-center">
          <div className="col-12 col-lg-6">
            <h1>Segara Villa</h1>
            <p>(047) 252-8632 to 33</p>
            <p>0917-795-7965</p>
            <p>0908-814-2438</p>
            <p>reservations@subicsegaravillas.com</p>
          </div>
          <div className="col-12 col-lg-6">
            <h1>Segara Suites</h1>
            <p>(047) 250-0923 to 324</p>
            <p>0917-123-2310</p>
            <p>0922-895-1514</p>
            <p>reservations@subicsegarasuites.com</p>
          </div>
          <div className="col-12 col-lg-6">
            <h1>Segara Residencias</h1>
            <p>(047) 251-3571</p>
            <p>0921-442-7225</p>
            <p>0915-800-8933</p>
            <p>residencia@globalterminals.ph</p>
          </div>
          <div className="col-12 col-lg-6">
            <h1>Segara Events</h1>
            <p>(047) 252-8632 to 33</p>
            <p>0998-588-7151</p>
            <p>sales.segarahotelssubic@gmail.com</p>
            <p>manager.segaraevents@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-account">
        <div className="row text-center">
          <div className="col-12">
            <h1>Follow Us</h1>
          </div>
          <div className="col-12">
            <a
              href="https://www.facebook.com/SegaraHotels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook-square fa-lg" />
            </a>
            <a
              href="https://www.instagram.com/segarahotels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram fa-lg" />
            </a>

            <a
              href="https://www.tiktok.com/@segarahotels"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-tiktok" />
            </a>
            <a
              href="https://www.tripadvisor.com.ph/Hotel_Review-g4751237-d4176944-Reviews-Segara_Suites-Subic_Bay_Freeport_Zone_Bataan_Province_Central_Luzon_Region_Luzon.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tripAdvisorLogo}
                alt="Trip Advisor Logo"
                className="img-fluid tripadvisor-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
