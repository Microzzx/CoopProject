import React, { useState } from "react";
import "../css/form.css";
import Input from "./sub_components/input";
import Textarea from "./sub_components/textarea";
import AutoAddress from "./sub_components/autoaddress";
import Employee from "./sub_components/employee";
import Axios from "axios";

function FormEx() {
  const [pdf, setPdf] = useState("");
  const handlePDFChange = (event) => {
    const file = event.target.files[0];
    setPdf(file);
  };

  const postEx = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("pdf17", pdf);

    Axios.post("http://localhost:3001/a2/input_ex", formData, {
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
      style={{ minHeight: "796px" }}
    >
      <div className="container border shadow rcorners2 mt-5 mb-5">
        <form
          className="row row-cols-auto g-3 top-row needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-12 mb-2">
            <h2 className="center mtc mbc">เอกสารเพิ่มเติม</h2>
          </div>
          <div className="col-md-6">
            <label className="label">1. หนังสือรักษาความลับ</label>
            <Input
              name="pdf"
              type={"file"}
              setFunc={(e) => handlePDFChange(e)}
            ></Input>
          </div>
          <div className="col-md-12 mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <iframe src="http://localhost:3001/static/pdfs/example.pdf"></iframe>
        <a href="http://localhost:3001/static/pdfs/example.pdf" download>
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default FormEx;
