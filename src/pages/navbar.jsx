import React from "react";
import logo1 from "../assets/SegaraHotels.ico";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo1} className="img-fluid segaralogo" alt="icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <i className="far fa-stream navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-link active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  activeClassName="nav-link dropdown-toggle active"
                  to="/rooms-and-rates"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms &amp; Rates
                </NavLink>
                <div className="dropdown-menu ">
                  <div className="d-flex justify-content-between">
                    <div className=" d-flex flex-column contents mx-3 ">
                      <h3>Villas</h3>
                      <a className="dropdown-item" href="/">
                        Junior Villas
                      </a>
                      <a className="dropdown-item" href="/">
                        Executive Villas
                      </a>
                    </div>
                    <div className=" d-flex flex-column contents mx-1">
                      <h3>Rooms</h3>
                      <a className="dropdown-item" href="/">
                        Junior Rooms
                      </a>
                      <a className="dropdown-item" href="/">
                        Executive Rooms
                      </a>
                    </div>
                    <div className="d-flex flex-column  contents mx-3">
                      <h3>Residencias</h3>
                      <a className="dropdown-item" href="/">
                        Family Residencias
                      </a>
                      <a className="dropdown-item" href="/">
                        Friends Residencias
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/restaurant"
                >
                  Dining
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/events"
                >
                  #SegaraExperience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/offers"
                >
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
