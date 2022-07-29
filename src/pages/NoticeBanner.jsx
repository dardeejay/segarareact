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
              className="notice-btn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              More
            </button>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <button
              className="notice-btn"
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
        onRequestClose={() => setOpenModal(false)}
        className="Modal1"
        overlayClassName="Overlay1"
        // style={{
        //   overlay: {
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //     border: "1px solid black",

        //     position: "fixed",
        //     zIndex: "99",
        //   },
        //   content: {
        //     borderRadius: "none",
        //     margin: "auto",
        //     width: "35%",
        //   },
        // }}
      >
        <div className="modal-heading d-flex justify-content-between">
          <h4>IMPORTANT NOTICE</h4>
          <button className="modal-btn" onClick={() => setOpenModal(false)}>
            <h5>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </h5>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim
            quaerat nam a exercitationem nostrum nobis magnam veritatis ab eos
            quia ratione culpa, eligendi ducimus. Officia maiores aperiam
            assumenda similique. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda, adipisci exercitationem. Blanditiis
            possimus ratione odit voluptatibus laboriosam veritatis autem a
            adipisci perspiciatis. Voluptates vitae minus, distinctio
            consectetur doloribus qui quibusdam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Veniam magnam laborum ea accusamus
            expedita, ipsam ad id porro corrupti consectetur voluptate? Odit
            magnam nostrum ratione aperiam? Reiciendis quasi quam numquam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ratione in inventore reprehenderit a possimus, natus earum! Odit
            nihil quidem ipsa, temporibus eius eum obcaecati aliquid, deserunt
            cupiditate doloribus impedit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quasi iusto, commodi ducimus maxime
            aut provident inventore nostrum ipsum! Voluptas, eius modi? Culpa
            omnis doloremque provident cum optio id, quod tenetur?
          </p>
        </div>
      </Modal>
    </div>
  );
}
