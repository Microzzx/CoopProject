import React, { useState, useEffect } from "react";
import Axios from "axios";
import a1 from "../image/a1.jpg";
import a2 from "../image/a2.jpg";
import "../css/document.css";
import Grid from "@mui/material/Grid";
function Document() {
  //check user status
  const [state, setState] = useState({
    a1_status: "",
    a2_status: "",
  });

  useEffect(() => {
    const GetUserStatus = () => {
      const token = localStorage.getItem("token");
      Axios.get("http://localhost:3001/doc_status", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setState({ ...state, a1_status: response.data[0].status });
      });
    };
    GetUserStatus();
  }, []);



  return (
    <Grid container component="main" sx={{ height: "86.5vh" }}>
      <div className="container">
        <div className="row  mt-5 mb-5">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body ms-2">
                <img
                  src={a1}
                  className="rounded-circle mb-3"
                  height="50px"
                  width="50px"
                  alt="image"
                />
                <h5 className="card-title">Form A1</h5>
                <p className="card-text">
                  แบบฟอร์มสำหรับกรอกข้อมูลประวัติผู้รับเหมารายใหม่
                </p>
                <a
                  href="/formA1"
                  className={
                    state.a1_status === "Approved" || state.a1_status === "Pending"
                      ? "btn btn-primary disabled"
                      : "btn btn-primary"
                  }
                >
                  Form A1
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body ms-2">
                <img
                  src={a2}
                  className="rounded-circle mb-3"
                  height="50px"
                  width="50px"
                  alt="avatar"
                />
                <h5 className="card-title">Form A2</h5>
                <p className="card-text">
                  แบบฟอร์มส่งข้อมูลแสดงคุณสมบัติเบื้องต้นของผู้รับเหมาเพื่อพิจารณาเข้าร่วมโครงการฯ
                </p>
                <a href="/formA2" className={
                    state.a1_status === "Approved" && state.a2_status === "" || state.a2_status === "Declined"
                      ? "btn btn-primary"
                      : "btn btn-primary disabled"
                  }>
                  Form A2
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className={
                    state.a2_status === "Approved"
                      ? "card mb-3 border-success"
                      : state.a2_status === "Declined"
                      ? "card mb-3 border-danger"
                      : state.a2_status === "Pending"
                      ? "card mb-3 border-warning"
                      : state.a1_status === "Approved"
                      ? "card mb-3 border-success"
                      : state.a1_status === "Declined"
                      ? "card mb-3 border-danger"
                      : state.a1_status === "Pending"
                      ? "card mb-3 border-warning"
                      : "card mb-3 border-info"
                }>
              <div className={
                    state.a2_status === "Approved"
                      ? "card-body text-success"
                      : state.a2_status === "Declined"
                      ? "card-body text-danger"
                      : state.a2_status === "Pending"
                      ? "card-body text-warning"
                      : state.a1_status === "Approved"
                      ? "card-body text-success"
                      : state.a1_status === "Declined"
                      ? "card-body text-danger"
                      : state.a1_status === "Pending"
                      ? "card-body text-warning"
                      : "card-body text-info"
                }>
                <h5 className="card-title">Status</h5>
                <p className="card-text">
                {
                    state.a2_status === "Approved"
                      ? "A2-Approved"
                      : state.a2_status === "Declined"
                      ? "A2-Declined"
                      : state.a2_status === "Pending"
                      ? "A2-Pending"
                      : state.a1_status === "Approved"
                      ? "A1-Approved Please Input A2"
                      : state.a1_status === "Declined"
                      ? "A1-Declined"
                      : state.a1_status === "Pending"
                      ? "A1-Pending"
                      : "Please Input A1 First"
                }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
//
export default Document;
