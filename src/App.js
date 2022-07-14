import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/navbar'
import Home from './pages/home'
import RoomsAndRates from './pages/rooms&rates';
import Restaurant from './pages/restaurant';
import Events from './pages/events';
import AboutUs from './pages/about-us';
import ErrorPage from './pages/error';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms-and-rates" element={<RoomsAndRates />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path = "*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
