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
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/rooms-and-rates"
                >
                  Rooms &amp; Rates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/restaurant"
                >
                  Restaurant
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
              {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="nav-link active"
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
