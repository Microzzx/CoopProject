import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "../sub_components/modal";
import Loading from "../loading";
const ViewA2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    comment: "",
    status: "",
  });
  const url = window.location.pathname;

  useEffect(() => {
    const fetchData = (id) => {
      Axios.get(`http://localhost:3001/a2_get/${id}`).then((response) => {
        setData(response.data);
        setState((prevState) => ({
          ...prevState,
          comment: response.data[0].comment,
          status: response.data[0].status,
        }));
        setLoading(false);
      });
    };
    fetchData(url.substring(url.lastIndexOf("/") + 1));
  }, [url]);

  const ConfirmA2 = (id) => {
    const token = localStorage.getItem("token");
    Axios.put(
      "http://localhost:3001/a2_edit",
      {
        comment: state.comment,
        status: state.status,
        a2_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        alert(response.data.message);
        window.location = "/tableA2";
      })
      .catch((error) => {
        alert("unsuccessful, " + error);
        console.log(error);
      });
  };

  const displayPDF = (url) => {
    window.open(url, "_blank");
  };

  const printA2 = (e) => {
    e.preventDefault();
    console.log(data[0]);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container border shadow rcorners2 mt-5 mb-5">
      <form className="row row-cols-auto g-3 top-row ms-5 me-5 mb-3">
        <div className="col-12 mb-2">
          <label className="form-label">
            <small>
              Email : {data[0].email} | Time : {data[0].time} | Status :{" "}
              <span
                style={{
                  color:
                    data[0].status === "Approved"
                      ? "green"
                      : data[0].status === "Declined"
                      ? "red"
                      : "orange",
                }}
              >
                {data[0].status}
              </span>
            </small>
          </label>
        </div>
        <div className="col-md-12 mb-2">
          <h5 className="label">
            <u>ข้อมูลทั่วไป</u>
          </h5>
        </div>
        <div className="col-md-4">
          <label className="label">ประเภทของผู้รับเหมา :</label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].comtype}</label>
        </div>
        <div className="col-md-4">
          <label className="label">ชื่อสถานประกอบการ :</label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].comname}</label>
        </div>
        <div className="col-md-4">
          <label className="label">ประเภทของการรับงาน :</label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].worktype}</label>
        </div>
        <div className="col-md-4">
          <label className="label">
            พื้นที่ที่สะดวกในการดำเนินงานก่อสร้าง :
          </label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].workarea}</label>
        </div>
        <div className="col-md-4">
          <label className="label">ชื่อผู้สมัคร :</label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].name}</label>
        </div>
        <div className="col-md-4">
          <label className="label">เบอร์โทรศัพท์ :</label>
        </div>
        <div className="col-md-8">
          <label className="form-label">{data[0].phone}</label>
        </div>
        <div className="col-12 mt-5 mb-2">
          <h5 className="label">
            <u>ข้อมูลผู้สมัครเข้าร่วมโครงการ</u>
          </h5>
        </div>
        <div className="col-md-5">
          <label className="label">หนังสือรับรอง :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url1)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            ภพ.20 (หนังสือจดทะเบียนภาษีมูลค่าเพิ่ม) :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url2)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            บัญชีรายชื่อผู้ถือหุ้น บมจ.006 หรือ บอจ.5 :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url3)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">หลักฐานอื่น :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url4)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">หนังสือรักษาความลับ :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url5)}
          >
            View PDF
          </button>
        </div>
        <div className="col-12 mt-5 mb-2">
          <h5 className="label">
            <u>ข้อมูลทางด้านการเงินของผู้สมัคร</u>
          </h5>
        </div>
        <div className="col-md-5">
          <label className="label">งบการเงิน 2 ปีล่าสุด :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url6)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            Statement เงินฝากธนาคาร 6 เดือนย้อนหลัง :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url7)}
          >
            View PDF
          </button>
        </div>
        <div className="col-12 mt-5 mb-2">
          <h5 className="label">
            <u>ข้อมูลด้านการบริหารองค์กร</u>
          </h5>
        </div>
        <div className="col-md-5">
          <label className="label">แผนที่ตั้งพร้อมภาพถ่ายสถานประกอบการ :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url8)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">แผนผังโครงสร้างองค์กร :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url9)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">จำนวนวิศวกร หรือวิศวกรที่ปรึกษา :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url10)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            จำนวน และรายชื่อผู้ควบคุมงาน (Foreman) :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url11)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">จำนวนชุดช่างแรงงาน (Labour) :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url12)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">รายชื่อผู้รับเหมาช่วงงานเฉพาะทาง :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url13)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            รายชื่อร้านค้าที่ผู้รับเหมาซื้อวัสดุก่อสร้างเป็นประจำ :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url14)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            Project Reference ข้อมูลผลงานก่อสร้างในอดีต :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url15)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">
            ชนิด และจำนวนเครื่องมือ/เครื่องจักร ในการทำงาน :
          </label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url16)}
          >
            View PDF
          </button>
        </div>
        <div className="col-md-5">
          <label className="label">นโยบายด้านความปลอดภัยเบื้องต้น :</label>
        </div>
        <div className="col-md-7">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => displayPDF(data[0].url17)}
          >
            View PDF
          </button>
        </div>
        <div className="col-12 mt-5 mb-2">
          <h5 className="label">
            <u>Comment</u>
          </h5>
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            placeholder="โปรดระบุความคิดเห็น"
            rows={4}
            id="inputtools"
            defaultValue={data[0].comment}
            onChange={(e) => setState({ ...state, comment: e.target.value })}
          />
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={state.status === "Approved"}
              onChange={() => setState({ ...state, status: "Approved" })}
            />
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Approve
            </label>
          </div>
        </div>
        <div className="col-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={state.status === "Declined"}
              onChange={() => setState({ ...state, status: "Declined" })}
            />
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Decline
            </label>
          </div>
        </div>
      </form>
      <div className="row row-cols-auto g-3 top-row ms-5 me-5 mb-3">
        <div className="col-11" />
        <div className="col-1">
          <Modal
            title="ยืนยันข้อมูล"
            context="คุณต้องการอัพเดทรายการนี้หรือไม่?"
            text="Confirm"
            setFunc={(e) => {
              e.preventDefault();
              ConfirmA2(data[0].a2_id);
            }}
          ></Modal>
        </div>
      </div>
    </div>
  );
};

export default ViewA2;
