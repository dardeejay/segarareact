import React, { Component } from "react";
import "../styles/events.scss";
import event1Pic from "../assets/pics/seasonal-events1.png";
import event2Pic from "../assets/pics/event2.jpg";
class Events extends Component {
  render() {
    return (
      <div>
        {/*FrontPage*/}
        <div className="events_frontPage container-fluid">
          <div className="row">
            <div className="events_frontPage_container">
              <div className="events_frontPage_container_text">
                <h1 className="display-1">#SegaraExperience</h1>
              </div>
            </div>
          </div>
        </div>
        {/*Divider*/}

        <div className="container-fluid events_divider1">
          <div className="row">
            <div className="col-sm-12 text-center mb-5 divider_text">
              <h1>MAKE MEMORIES</h1>
              <h5>―</h5>
              <h3>Celebrate what's important to you at our function room</h3>
            </div>
          </div>
        </div>
        {/*Seasonal Events*/}
        <div className="events_container container-fluid ">
          <div className="row gy-1">
            <div className="col-md-4 event1 event_column">
              <div className="event1_container container-fluid text-center">
                <div className="events_text_container ">
                  <h2>WEDDINGS</h2>
                  <h3>
                    The moment you've always dreamed of, made more magical with
                    us!
                  </h3>
                </div>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
            <div className="col-md-4 event2 event_column ">
              <div className="event2_container container-fluid  text-center">
                <div className="events_text_container ">
                  <h2>BIRTHDAYS</h2>
                  <h3>Grateful for another year with you at Segara Hotels!</h3>
                </div>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
            <div className="col-md-4 event3 event_column">
              <div className="event3_container container-fluid  text-center">
                <div className="events_text_container ">
                  <h2>CORPORATE EVENTS</h2>
                  <h3>
                    Forming bonds and friendships as we achieve our dreams
                    together!
                  </h3>
                </div>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Seasonal Events*/}
        <div className="seasonal_event1 container-fluid">
          <div className="seasonal_event1_container row justify-content-between">
            <div className="col-md-6 sec1_text">
              <div className="row gy-0">
                <div className="col-md-12 p-5">
                  <h1>Luxury Dine &amp; Cruise</h1>
                </div>
                <div className="col-md-12 px-5">
                  <p>
                    Make your #SegaraExperience worthwhile and enjoy the
                    stunning sunset of Subic Bay! Book your luxury yacht cruise
                    and let our Chef’s and butler waiters provide you our
                    personalized service
                  </p>
                </div>
                <div className="col-md-12 px-5">
                  <a className="main-btn eventInquireButton" href="/">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 sec1_img">
              <img
                src={event1Pic}
                alt="seasonal_event_img"
                className="img-fluid event1img"
              />
            </div>
          </div>
        </div>
        {/*Seasonal events2*/}
        <div className="seasonal_event2 container-fluid">
          <div className="seasonal_event1_container row justify-content-between">
            <div className="col-md-5 sec2_img">
              <img
                src={event2Pic}
                alt="anniversary package"
                className="img-fluid event2im"
              />
            </div>
            <div className="col-md-6 sec2_text">
              <div className="row gy-0">
                <div className="col-md-12 p-5">
                  <h1>Anniversary Celebration Package</h1>
                </div>
                <div className="col-md-12 px-5">
                  <p>
                    How do you want to surprise her for your upcoming
                    anniversary? Running out of ideas? Worry no more! We’re to
                    help you! Let our team arrange everything for you.
                  </p>
                </div>
                <div className="col-md-12 px-5">
                  <a className="main-btn eventInquireButton" href="/">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
