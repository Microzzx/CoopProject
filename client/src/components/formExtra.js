import React, { useState } from "react";
import "../css/form.css";
import Input from "./sub_components/input";
import Axios from "axios";

function FormExtra() {
  const [pdf, setPdf] = useState("");
  const handlePDFChange = (event) => {
    const file = event.target.files[0];
    setPdf(file);
  };

  const postEx = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("pdf17", pdf);

    Axios.put(`${process.env.REACT_APP_API}/a2/input_extra`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
          alert(response.data.message);
          window.location = "/document";
        }
      })
      .catch((error) => {
        alert("unsuccessful, " + error);
        console.log(error);
      });
  };

  const checkValidity = () => {
    const form = document.querySelector("form");
    form.classList.add("was-validated");

    if (!pdf) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidity()) {
      postEx();
    }
  };

  return (
    <div
      className="container-fluid fixed-height"
      style={{ minHeight: "915px", paddingTop: "68px" }}
    >
      <div className="container border shadow rcorners2 mt-5 mb-5">
        <form
          className="row row-cols-auto g-3 top-row needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-12 mb-2">
            <h2 className="center mtc mbc">เอกสารเพิ่มเติม</h2>
          </div>
          <div className="col-12 mb-1">
            <h5 className="label">
              กรุณาดาวน์โหลดแบบฟอร์ม และกรอกข้อมูลให้ครบถ้วน
            </h5>
          </div>
          <div className="col-12 mb-3">
            - Confidentiality.pdf &nbsp;
            <a
              href={`${process.env.REACT_APP_API}/static/pdfs/Confidentiality.pdf`}
              download
            >
              Download
            </a>
          </div>
          <div className="col-12 mb-2">
            <h5 className="label">อัพโหลดเอกสารเพิ่มเติม</h5>
          </div>
          <div className="col-6">
            <label className="label">1. หนังสือรักษาความลับ</label>
            <Input
              name="pdf"
              type={"file"}
              accept="application/pdf"
              setFunc={(e) => handlePDFChange(e)}
            ></Input>
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormExtra;
