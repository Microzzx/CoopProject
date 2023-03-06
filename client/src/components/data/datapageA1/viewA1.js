import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../css/datapage.css";
import Modal from "../../sub_components/modal";
import Loading from "../../loading";
function TableA2() {
  const [data, setData] = useState({});
  const [state, setState] = useState({
    comment: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);
  const url = window.location.pathname;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = (id) => {
      Axios.get(`${process.env.REACT_APP_API}/a1/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.data.status === "error") {
            alert("Error: " + response.data.message);
          } else {
            setData(response.data);
            setState((prevState) => ({
              ...prevState,
              comment: response.data[0].comment,
              status: response.data[0].status,
            }));
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData(url.substring(url.lastIndexOf("/") + 1));
  }, [url]);

  const ConfirmA1 = (id) => {
    Axios.put(
      `${process.env.REACT_APP_API}/a1/edit`,
      {
        comment: state.comment,
        status: state.status,
        a1_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
          alert(response.data.message);
          window.location = "/data/tableA1";
        }
      })
      .catch((error) => {
        alert("unsuccessful, " + error);
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div style={{ paddingTop: "68px" }}>
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
          <div className="col-12 mb-2">
            <h5 className="label">
              <u>ข้อมูลผู้สมัครเข้าร่วมโครงการ</u>
            </h5>
          </div>
          <div className="col-3 ">
            <h6 className="label">ชื่อบริษัท :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].comname}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">อายุบริษัท :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].comage} ปี</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">สถานที่ตั้ง :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">
              ต.{data[0].subdistrict} อ.{data[0].district} จ.{data[0].province}{" "}
              {data[0].zipcode}
            </label>
          </div>
          <div className="col-3 ">
            <h6 className="label">ประเภทงาน :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].worktype}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">งานที่ถนัด :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].toughness}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">งานที่ไม่ถนัด :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].weakness}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">ผลงานเด่น :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].achieve}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">เครื่องมือ/เครื่องจักร :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].tools}</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">จำนวนสาขาที่ตั้งเป้า :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].branch} สาขา/เดือน</label>
          </div>
          <div className="col-3 ">
            <h6 className="label">จังหวัดที่สามารถรับงานได้ :</h6>
          </div>
          <div className="col-9">
            <label className="form-label">{data[0].provinces}</label>
          </div>
          <div className="col-12 mt-5 mb-2">
            <h5 className="label">
              <u>ข้อมูลจำนวนพนักงาน</u>
            </h5>
          </div>
          <div className="col-6">
            <h6 className="label">
              <u>พนักงานประจำ</u>
            </h6>
          </div>
          <div className="col-6">
            <h6 className="label">
              <u>พนักงานชั่วคราว</u>
            </h6>
          </div>
          <div className="col-2">
            <h6 className="label">วิศวกรโยธา :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].civil} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">วิศวกรโยธา :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].ocivil} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">วิศวกรไฟฟ้า :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].electrical} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">วิศวกรไฟฟ้า :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].oelectrical} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">โฟร์แมน :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].fore} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">โฟร์แมน :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].ofore} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง1 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].chief1} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง1 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].ochief1} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง2 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].chief2} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง2 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].ochief2} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง3 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].chief3} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">หัวหน้าช่าง3 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].ochief3} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง1 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].mechanic1} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง1 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].omechanic1} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง2 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].mechanic2} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง2 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].omechanic2} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง3 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].mechanic3} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">ช่าง3 :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].omechanic3} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">แรงงาน :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].worker} คน</label>
          </div>
          <div className="col-2">
            <h6 className="label">แรงงาน :</h6>
          </div>
          <div className="col-4">
            <label className="label">{data[0].oworker} คน</label>
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
            {data[0].status === "Pending" || data[0].status === "Pending_ex" ? (
              <Modal
                title="ยืนยันข้อมูล"
                context="คุณต้องการอัพเดทรายการนี้หรือไม่?"
                text="Confirm"
                setFunc={(e) => {
                  e.preventDefault();
                  ConfirmA1(data[0].a1_id);
                }}
              />
            ) : (
              <button className="btn btn-primary" disabled>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableA2;
