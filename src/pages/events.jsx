import React, { Component } from "react";
import events_Background from "../assets/Events.png";
import "../styles/events.scss";
import seasonal_event_img from "../assets/pics/seasonal-events1.png";
class Events extends Component {
  state = {};
  style = {
    backgroundImage: `url(${events_Background})`,
  };

  render() {
    return (
      <div>
        {/*FrontPage*/}
        <div className="events_frontPage container-fluid">
          <div className="row">
            <div className="events_frontPage_container" style={this.style}>
              <div className="events_frontPage_container_text">
                <h1>#SegaraExperience</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        {/*Divider*/}
        <div className="events_divider1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center mb-5">
                <h1>MAKE MEMORIES</h1>
                <h5>―</h5>
                <h3>Celebrate what's important to you at our function room</h3>
              </div>
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
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

export default Events;
