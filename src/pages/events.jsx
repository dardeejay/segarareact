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
        <div className="events_frontPage ">
          <div className="events_frontPage_container" style={this.style}>
            <div className="events_frontPage_container_text">
              <h1>#SegaraExperience</h1>
              <p></p>
            </div>
          </div>
        </div>
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
        <div className="events_container">
          <div className="event1">
            <div className="event1_container">
              <div className="event1_container_text">
                <h2>WEDDINGS</h2>
                <h3>
                  The moment you've always dreamed of, made more magical with
                  us!
                </h3>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
          <div className="event2">
            <div className="event2_container">
              <div className="event2_container_text">
                <h2>BIRTHDAYS</h2>
                <h3>Grateful for another year with you at Segara Hotels!</h3>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
          <div className="event3">
            <div className="event3_container">
              <div className="event3_container_text">
                <h2>CORPORATE EVENTS</h2>
                <h3>
                  Forming bonds and friendships as we achieve our dreams
                  together!
                </h3>
                <a className="main-btn eventInquireButton" href="/">
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="seasonal_event1_container container">
          <div className="seasonal_event1_container_text">
            <h1>Luxury Dine &amp; Cruise</h1>
            <p>
              Make your #SegaraExperience worthwhile and enjoy the stunning
              sunset of Subic Bay! Book your luxury yacht cruise and let our
              Chef’s and butler waiters provide you our personalized service{" "}
            </p>
          </div>
          <div className="seasonal_event1_container_img">
            <img
              src={seasonal_event_img}
              alt="seasonal_event_img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
