import React from "react";
import { motion } from "framer-motion";
import "../../styles/rooms&rates.scss";
import VillasImg from "../../assets/Villas/VillasHero.jpg";
import RoomPromoImg from "../../assets/Villas/VillasPromo.jpg";

function Villas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*Hero section*/}
      <div className="VillasHero container-fluid">
        <div className="row VillasHero_container">
          <div className="col-12 d-flex justify-content-center align-items-center text-center">
            <h1>Segara Villas</h1>
          </div>
        </div>
      </div>
      {/*Hero section*/}
      <div className="MainpageWrapper container-fluid">
        <div className="row RoomsMainWrapper">
          <div className="RoomsMainContainerWrapper col-lg-8 col-sm-12">
            <div className="RoomsMainContainer container-fluid d-flex justify-content-center">
              <div className="row flex-lg-row">
                <div className="col-md-12 text-center p-5 pb-0">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi voluptatibus, ut, est illum dignissimos repellat ex
                    illo eveniet sapiente totam recusandae odit unde nemo
                    accusantium neque voluptas fuga explicabo modi.
                  </p>
                </div>
                <div className="col-lg-12 text-center order-sm-1 my-3">
                  <div className="ImageContainer">
                    <h1 className="ImgText">Executive Villas</h1>
                    <img src={VillasImg} alt="Villas" className="MainRoomimg" />
                  </div>
                </div>
                <div className="row order-sm-2">
                  <div className="RoomDetails col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          From ₱ 40, 000.00 nett Good for 2 guests Inclusive of
                          VAT, municipal tax and service charge
                        </p>
                      </div>
                      <div className="col-4">
                        <p>bed:</p>
                        <p>room size:</p>
                        <p>view:</p>
                        <p>recommend:</p>
                        <p>maximum capacity:</p>
                      </div>
                      <div className="col-4">
                        <p>king bed</p>
                        <p>79m</p>
                        <p>mountain view</p>
                        <p>For the bride in waiting</p>
                        <p>
                          3 adults and 2 kids subject to additional charges per
                          head in excess of 2 guests
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <a className="main-btn-rooms" href="">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="RoomsMainContainer container-fluid d-flex justify-content-center">
              <div className="row flex-lg-row">
                <div className="col-lg-12 text-center order-sm-1 my-3">
                  <div className="ImageContainer">
                    <h1 className="ImgText">Executive Villas</h1>
                    <img src={VillasImg} alt="Villas" className="MainRoomimg" />
                  </div>
                </div>
                <div className="row order-sm-2">
                  <div className="RoomDetails col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          From ₱ 40, 000.00 nett Good for 2 guests Inclusive of
                          VAT, municipal tax and service charge
                        </p>
                      </div>
                      <div className="col-4">
                        <p>bed:</p>
                        <p>room size:</p>
                        <p>view:</p>
                        <p>recommend:</p>
                        <p>maximum capacity:</p>
                      </div>
                      <div className="col-4">
                        <p>king bed</p>
                        <p>79m</p>
                        <p>mountain view</p>
                        <p>For the bride in waiting</p>
                        <p>
                          3 adults and 2 kids subject to additional charges per
                          head in excess of 2 guests
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <a className="main-btn-rooms" href="">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="RoomsMainContainer container-fluid d-flex justify-content-center">
              <div className="row flex-lg-row">
                <div className="col-lg-12 text-center order-sm-1 my-3">
                  <div className="ImageContainer">
                    <h1 className="ImgText">Executive Villas</h1>
                    <img src={VillasImg} alt="Villas" className="MainRoomimg" />
                  </div>
                </div>
                <div className="row order-sm-2">
                  <div className="RoomDetails col-lg-9 col-sm-12">
                    <div className="row">
                      <div className="col-4">
                        <p>
                          From ₱ 40, 000.00 nett Good for 2 guests Inclusive of
                          VAT, municipal tax and service charge
                        </p>
                      </div>
                      <div className="col-4">
                        <p>bed:</p>
                        <p>room size:</p>
                        <p>view:</p>
                        <p>recommend:</p>
                        <p>maximum capacity:</p>
                      </div>
                      <div className="col-4">
                        <p>king bed</p>
                        <p>79m</p>
                        <p>mountain view</p>
                        <p>For the bride in waiting</p>
                        <p>
                          3 adults and 2 kids subject to additional charges per
                          head in excess of 2 guests
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <a className="main-btn-rooms" href="">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <div className="side col-lg-4 col-sm-12 pb-5">
            <div className="">
                <div className="row">
                  <div className="PromoContainer col-lg-12 text-center">
                    <h1>Villas Promo</h1>
                    <img src={RoomPromoImg} alt="" className="MainRoomimg" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Villas;
