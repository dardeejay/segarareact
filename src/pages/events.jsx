import React, { Component } from "react";
import events_Background from "../assets/Events.png";
import "../styles/events.scss";
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
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center mb-5">
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
              <h1>Weddings</h1>
            </div>
          </div>
          <div className="event2">
            <div className="event2_container">
              <h1>Birthdays</h1>
            </div>
          </div>
          <div className="event3">
            <div className="event3_container">
              <h1>Corporate Events</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
