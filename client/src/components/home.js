import React, { useContext } from "react";
import "../css/main.css";
import pic1 from "../image/cat_winter.jpg";
import pic2 from "../image/kitten_lying.jpg";
import pic3 from "../image/snow_leopard.jpg";
import img1 from "../image/view_icon.jpg";

function Home() {
  return (
    <div className="container bgcolor mt-5">
      <div className="row">
        <div className="col-sm-8 me-5">
          <div
            id="carouselExampleIndicators"
            className="carousel carousel-dark slide ms-4 mt-5 mb-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic1} className="d-block w-850" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={pic2} className="d-block w-850" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={pic3} className="d-block w-850" alt="..." />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

         
            <div className="row row align-items-start">
              <div className="col">
              One of three columns
              </div>
              <div className="col">
              One of three columns
              </div>
              <div className="col">
              One of three columns
              </div>
            </div>
          
        </div>

        <div className="col-sm-3 mt-5 blank-col1"></div>
      </div>
    </div>
  );
}

export default Home;
