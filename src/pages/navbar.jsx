import React, { Component } from "react";
import logo1 from "../assets/segara-logo.jpg";

function NavBar() {
  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" href="/">
            <img src={logo1} class="img-fluid" alt="icon" />
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rooms-and-rates">
                  Rooms &amp; Rates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/restaurant">
                  Restaurant
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
