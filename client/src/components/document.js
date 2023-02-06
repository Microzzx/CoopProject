import React from "react";
import a1 from "../image/a1.jpg";
import a2 from "../image/a2.jpg";
import "../css/document.css";
import Grid from "@mui/material/Grid";
function Document() {
  return (
    <Grid container component="main" sx={{ height: "86.5vh" }}>
      <div class="row mt-5 ms-5 me-5">
        <div class="col-lg-5  align-items-stretch">
        <div className="card">
            <div className="card-body ms-2">
              <img
                src={a1}
                className="rounded-circle mb-3"
                height="50px"
                width="50px"
                alt="image"
              />
              <h5 className="card-title text">Form A1</h5>
              <p className="card-text">
                แบบฟอร์มสำหรับกรอกข้อมูลประวัติผู้รับเหมารายใหม่
              </p>
              <a href="/formA1" className="btn btn-primary mt-4">
                Form A1
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5  align-items-stretch">
        <div className="card">
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
              <a href="#" className="btn btn-primary">
                Form A2
              </a>
            </div>
          </div>
        </div>
        
    </div>








      
    </Grid>
  );
}
//
export default Document;
