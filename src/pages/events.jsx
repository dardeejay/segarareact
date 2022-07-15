import React, { Component } from "react";
import events_Background from "../assets/Events.png";
class Events extends Component {
  state = {};
  style = {
    backgroundImage: `url(${events_Background})`,
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
  };
  render() {
    return (
      <div>
        <div className="events_frontPage ">
          <div className="events_frontPage_container" style={this.style}>
            <div className="events_frontPage_container_text">
              <h1>Events</h1>
              <p></p>
            </div>
          </div>
        </div>

        <div className="events_container">
          <div className="event1">
            <div className="event1_images"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
