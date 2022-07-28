import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import "../styles/noticebanner.scss";

Modal.setAppElement("#root");
export function NoticeBanner({ closeBanner }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="notice-banner">
      <div className="container-fluid notice-container">
        <div className="row d-flex justify-content-between">
          <div className="col-10 d-flex">
            <p className="pt-3">
              IMPORTANT NOTICE: The wellbeing of our guests and colleagues
              remains our highest priority at Segara Hotels, Subic.
            </p>
            <button
              className="btn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              More
            </button>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <button
              className="btn"
              onClick={() => {
                closeBanner(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        id="modal-cons"
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid black",

            position: "fixed",
            zIndex: "99",
          },
          content: {
            borderRadius: "none",
            margin: "auto",
            width: "30%",
          },
        }}
      >
        <div className="modal-heading d-flex justify-content-between">
          <h4>IMPORTANT NOTICE</h4>
          <button className="btn" onClick={() => setOpenModal(false)}>
            <h5>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </h5>
          </button>
        </div>
        <p>
          The health and safety of our guests and colleagues is of paramount
          importance to us. Edsa Shangri-La, Manila remains committed to
          providing a safe and pleasant environment through Shangri-La Cares,
          our group's commitment to elevating its already rigorous hygiene and
          safety protocols for all properties worldwide. — Learn more about:
          COVID-19 emergency medical coverage for international guests — In line
          with the implementation of the General Community Quarantine currently
          at Alert Level 1 from March 1, 2022, we may accept room reservations
          for leisure for all ages with the following conditions: Fully
          vaccinated guests with last dose administered 14 days or more prior to
          check-in date, and children 18 years old and below are no longer
          required to undergo testing prior to check-in. Vaccination card must
          be presented upon arrival. Guests who are not fully vaccinated are
          required to present a negative result from an RT-PCR test administered
          by any DOH-accredited testing center conducted within 48 hours prior
          to check-in. As a multi-use accommodation facility, Edsa Shangri-La,
          Manila may accommodate bookings for travelers that need to undergo
          mandatory quarantine. Operating restaurants are fully open for dine-in
          and takeaway. Periodic adjustments to hotel operations may apply in
          keeping with the latest government guidelines. Please contact the
          hotel (+632) 8633 8888 or email manilaedsa@shangri-la.com for more
          information. We thank you for your kind understanding. — Edsa
          Shangri-La, Manila, is a Safety Seal certified establishment and has
          been awarded with the Safeguard™ Hygiene Excellence and Safety Label
          by Bureau Veritas, the World's leading testing and inspection agency.
          View our Covid-19 certifications, services and updates here.
        </p>
      </Modal>
    </div>
  );
}
