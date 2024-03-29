import React, { useState, useEffect } from "react";
import Axios from "axios";
import a1 from "../image/a1.jpg";
import a2 from "../image/a2.jpg";
import ex from "../image/ex.jpg";
import "../css/document.css";
function Document() {
  //check user status
  const [state, setState] = useState({
    a1_status: "",
    a2_status: "",
  });

  useEffect(() => {
    const GetUserStatus = () => {
      const token = localStorage.getItem("token");
      Axios.get(`${process.env.REACT_APP_API}/doc_status`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setState(response.data);
        // console.log(response.data);
      });
    };
    GetUserStatus();
  }, []);

  return (
    <div
      className="container-fluid fixed-height"
      style={{ paddingTop: "70px" }}
    >
      <div className="container border shadow rcorners2 mt-5 mb-5 container-c">
        <div className="row mt-3 mb-5">
          <div className="col-lg-12 mb-3">
            <div
              className={
                state.a2_status === "Approved_extra"
                  ? "alert alert-success"
                  : state.a2_status === "Declined_extra"
                  ? "alert alert-danger"
                  : state.a2_status === "Pending_extra"
                  ? "alert alert-warning"
                  : state.a2_status === "Approved"
                  ? "alert alert-success"
                  : state.a2_status === "Declined"
                  ? "alert alert-danger"
                  : state.a2_status === "Pending"
                  ? "alert alert-warning"
                  : state.a1_status === "Approved"
                  ? "alert alert-success"
                  : state.a1_status === "Declined"
                  ? "alert alert-danger"
                  : state.a1_status === "Pending"
                  ? "alert alert-warning"
                  : "alert alert-info"
              }
              role="alert"
            >
              <strong>Status : </strong>
              {state.a2_status === "Approved_extra"
                ? "เอกสารเพิ่มเติมถูกอนุมัติเรียบร้อยแล้ว กรุณาติดต่อเจ้าหน้าที่เพื่อดำเนินกระบวนการต่อไป"
                : state.a2_status === "Declined_extra"
                ? "เอกสารเพิ่มเติมถูกปฏิเสธ กรุณาติดต่อเจ้าหน้าที่ และแก้ไขใหม่อีกครั้ง"
                : state.a2_status === "Pending_extra"
                ? "ได้รับเอกสารเพิ่มเติมของคุณแล้ว กรุณารอการแจ้งเตือนผ่านทาง email ในภายหลัง"
                : state.a2_status === "Approved"
                ? "แบบฟอร์ม A2 ถูกอนุมัติเรียบร้อยแล้ว กรุณากรอกข้อมูลเอกสารเพิ่มเติม"
                : state.a2_status === "Declined"
                ? "แบบฟอร์ม A2 ถูกปฏิเสธ กรุณาติดต่อเจ้าหน้าที่ และแก้ไขใหม่อีกครั้ง"
                : state.a2_status === "Pending"
                ? "ได้รับแบบฟอร์ม A2 ของคุณแล้ว กรุณารอการแจ้งเตือนผ่านทาง email ในภายหลัง"
                : state.a1_status === "Approved"
                ? "แบบฟอร์ม A1 ถูกอนุมัติเรียบร้อยแล้ว กรุณากรอกข้อมูลแบบฟอร์ม A2"
                : state.a1_status === "Declined"
                ? "แบบฟอร์ม A1 ถูกปฏิเสธ กรุณาติดต่อเจ้าหน้าที่ และแก้ไขใหม่อีกครั้ง"
                : state.a1_status === "Pending"
                ? "ได้รับแบบฟอร์ม A1 ของคุณแล้ว กรุณารอการแจ้งเตือนผ่านทาง email ในภายหลัง"
                : "กรุณากรอกข้อมูลแบบฟอร์ม A1"}
            </div>
          </div>
          <div className="col-lg-12 mb-4">
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
                <p className="card-text">แบบสอบถามประวัติผู้รับเหมารายใหม่</p>
                <a
                  href="/form/formA1"
                  className={
                    state.a1_status === "Approved" ||
                    state.a1_status === "Pending"
                      ? "btn btn-primary disabled"
                      : "btn btn-primary"
                  }
                >
                  Form A1
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4">
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
                  คุณสมบัติเบื้องต้นของผู้รับเหมาเพื่อพิจารณาเข้าร่วมโครงการฯ
                </p>
                <a
                  href="/form/formA2"
                  className={
                    (state.a1_status === "Approved" &&
                      state.a2_status === "") ||
                    state.a2_status === "Declined"
                      ? "btn btn-primary"
                      : "btn btn-primary disabled"
                  }
                >
                  Form A2
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <div className="card h-100">
              <div className="card-body ms-2">
                <img
                  src={ex}
                  className="rounded-circle mb-3"
                  height="50px"
                  width="50px"
                  alt="avatar"
                />
                <h5 className="card-title">เอกสารเพิ่มเติม</h5>
                <p className="card-text">
                  ส่งเอกสารเพิ่มเติมหลังจากผ่านการอนุมัติจากคณะกรรมการ
                </p>
                <a
                  href="/form/formExtra"
                  className={
                    state.a1_status === "Approved" &&
                    (state.a2_status === "Approved" ||
                      state.a2_status === "Declined_extra")
                      ? "btn btn-primary"
                      : "btn btn-primary disabled"
                  }
                >
                  Extra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
