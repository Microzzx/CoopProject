import * as React from "react";
import "../css/home.css";

import img1 from "../image/sme1.png";
import img2 from "../image/cpall.png";
import card1 from "../image/card1.png";
import card2 from "../image/card2.png";
import card3 from "../image/card3.png";
import red from "../image/red.png";
import skyblue from "../image/skyblue.png";
import green from "../image/green.png";
import blue from "../image/blue.png";

export default function Home() {
  return (
    <>
      {/* ----- */}
      <div style={{ paddingTop: "68px" }} />
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
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
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ---- */}
      <div class="container py-2">
        <div class="row row_branchen">
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <div class="image__wrapper">
                <div class="card__shadow--1"></div>
                <img
                  class="card-img-top"
                  src={card1}
                  alt="Angebote - Verkaufsautomaten"
                />
              </div>
              <div class="card-body pb-5">
                <h3 class="card-title">ปรัชญาองค์กร</h3>
                <p class="card-text">
                  เราปรารถนารอยยิ้มจากลูกค้า ด้วยทีมงานที่มีความสุข
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <div class="image__wrapper">
                <div class="card__shadow--1"></div>
                <img
                  class="card-img-top"
                  src={card2}
                  alt="Angebote - Verkaufsautomaten"
                />
              </div>
              <div class="card-body pb-5">
                <h3 class="card-title">วิสัยทัศน์</h3>
                <p class="card-text">เราให้บริการความสะดวกกับทุกชุมชน</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <div class="image__wrapper">
                <div class="card__shadow--1"></div>
                <img
                  class="card-img-top"
                  src={card3}
                  alt="Angebote - Verkaufsautomaten"
                />
              </div>
              <div class="card-body pb-4">
                <h3 class="card-title">พันธกิจ</h3>
                <p class="card-text">
                  สร้างความผูกพันกับลูกค้า
                  ด้วยสินค้าและบริการที่เปี่ยมด้วยนวัตกรรม
                  มุ่งสู่องค์กรคุณภาพและมีความยั่งยืน
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>

      {/* ----- */}
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-12 mb-2">
            <div className="container d-flex justify-content-center align-items-center">
              <img width="100" height="70" src={img2} alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="header">
              <h1>ตราสัญลักษณ์องค์กร</h1>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="featurette-heading">
              สีแดง <span className="text-muted">The Sincere Bright Red</span>
            </h2>
            <p className="lead">
              สีแห่งความรักและความจริงใจที่ CP-ALL
              มอบให้กับกลุ่มผู้มีส่วนได้ส่วนเสียทุกกลุ่ม
            </p>
          </div>
          <div className="col-lg-5">
            <div className="container d-flex rounded-circle">
              <img
                width="300"
                height="300"
                src={red}
                className="img-responsive rounded-circle"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-lg-7 order-lg-2">
            <h2 className="featurette-heading">
              สีฟ้า <span className="text-muted">The Creative Sky Blue</span>
            </h2>
            <p className="lead">
              สีแห่งความคิดสร้างสรรค์ทางความคิด การขยายตัวทางธุรกิจ
              และก้าวไปข้างหน้า
            </p>
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="container d-flex">
              <img
                width="300"
                height="300"
                src={skyblue}
                className="img-responsive rounded-circle"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-lg-7">
            <h2 className="featurette-heading">
              สีเขียว{" "}
              <span className="text-muted">The Caring Gentle Green</span>
            </h2>
            <p className="lead">
              ความสงบสุข การดูแลเอาใจใส่ให้ได้รับความสุข
              ความสะดวกสบายความปลอดภัย
            </p>
          </div>
          <div className="col-lg-5">
            <div className="container d-flex">
              <img
                width="300"
                height="300"
                src={green}
                className="img-responsive rounded-circle"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-lg-7 order-lg-2">
            <h2 className="featurette-heading">
              สีน้ำเงินสด{" "}
              <span className="text-muted">
                The Sustainable Bright Blue for CP ALL
              </span>
            </h2>
            <p className="lead">ความมั่นคง ความยั่งยืนขององค์กร CP-ALL</p>
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="container d-flex ">
              <img
                width="300"
                height="300"
                src={blue}
                className="img-responsive rounded-circle"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-12">
            <div className="header">
              <h1>Contact</h1>
            </div>
          </div>

          <div className="col-md-12 mb-5">
            <div className="container d-flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.238824276296!2d100.53123949815043!3d13.901620203929323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2839922ac7d55%3A0x47fb5dcc3deeedd0!2sTHE%20TARA%20CP%20ALL!5e0!3m2!1sth!2sth!4v1677745021495!5m2!1sth!2sth"
                width="1280"
                height="500"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="row gy-4" style={{ textAlign: "center" }}>
          <div class="col-md-6">
            <div class="info-item">
              <div>
                <h3 style={{ paddingBottom: "8px" }}>ที่อยู่</h3>
                <p className="lead">
                  58/28 อาคาร เดอะ ธารา ชั้น 19 หมู่ 2 ถ.แจ้งวัฒนะ
                  <br />
                  ต.บางตลาด อ.ปากเกร็ด จ.นนทบุรี 11120
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info-item">
              <div>
                <h3 style={{ paddingBottom: "8px" }}>Email</h3>
                <p className="lead">natnareesir@cpall.co.th</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info-item">
              <div>
                <h3 style={{ paddingBottom: "8px" }}>Tel.</h3>
                <p className="lead">091-004-9465</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info-item">
              <div>
                <h3 style={{ paddingBottom: "8px" }}>Mobile.</h3>
                <p className="lead">089-141-0193</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </>
  );
}
