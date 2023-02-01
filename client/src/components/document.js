import React from "react";
import a1 from "../image/a1.jpg";
import a2 from "../image/a2.jpg";
import "../css/document.css";

function Document() {
  return (
    <div className="row mt-5 ms-5 me-5">
      <div className="col-sm-3">
        <div className="card h-100">
          <div className="card-body ms-2">
            <img
              src={a1}
              className="rounded-circle mb-3"
              height="50px"
              width="50px"
              alt="image"
            />
            <h5 className="card-title text">From A1</h5>
            <p className="card-text">
              แบบฟอร์มกรอกข้อมูลของผู้รับเหมาในเบื้องต้น
            </p>
            <a href="/formA1" className="btn btn-primary mt-4">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body ms-2">
            <img
              src={a2}
              className="rounded-circle mb-3"
              height="50px"
              width="50px"
              alt="avatar"
            />
            <h5 className="card-title">A2</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/formA1" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body ms-2">
            <img
              src={a2}
              className="rounded-circle mb-3"
              height="50px"
              width="50px"
              alt="avatar"
            />
            <h5 className="card-title">A2</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/formA1" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
//
export default Document;
