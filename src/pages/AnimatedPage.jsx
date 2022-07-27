import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home";
import RoomsAndRates from "./rooms&rates";
import Restaurant from "./restaurant";
import Events from "./events";
import AboutUs from "./about-us";
import ErrorPage from "./error";
import Menu from "./restaurant/menu";
import { AnimatePresence } from "framer-motion";
import { ContactUs } from "./contact-us";
import Residencias from "./rooms-and-rates/residencias";
import Suites from "./rooms-and-rates/suites";
import Villas from "./rooms-and-rates/villas";
function AnimatedPage() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms-and-rates" element={<RoomsAndRates />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/restaurant/menu" element={<Menu />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/rooms-and-rates/residencias" element={<Residencias />} />
        <Route path="/rooms-and-rates/suites" element={<Suites />} />
        <Route path="/rooms-and-rates/villas" element={<Villas />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedPage;
