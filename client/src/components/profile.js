import React, { useState, useEffect } from "react";
import "../css/profile.css";
import Axios from "axios";
import Modal from "./sub_components/modal";
import Loading from "./loading";
import Grid from "@mui/material/Grid";

export default function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    pre_password: "",
    new_password: "",
  });

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      Axios.get("http://localhost:3001/user/get", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setData(response.data);
        setState((prevState) => ({
          ...prevState,
          fname: response.data.fname,
          lname: response.data.lname,
          phone: response.data.phone,
        }));
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  const Edit1 = () => {
    console.log(state);
    const token = localStorage.getItem("token");
    Axios.put(
      "http://localhost:3001/user/edit",
      {
        fname: state.fname,
        lname: state.lname,
        phone: state.phone,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        alert("Data Updated!");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
        window.location.reload(false);
      });
  };

  const Edit2 = () => {
    const token = localStorage.getItem("token");
    Axios.put(
      "http://localhost:3001/user/edit/password",
      {
        pre_password: state.pre_password,
        new_password: state.new_password,
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
        window.location.reload(false);
      })
      .catch((error) => {
        alert("unsuccessful, " + error.response.data.message);
        console.log(error);
        window.location.reload(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid container component="main" sx={{ height: "87.1vh" }}>
      <div className="container border shadow rcorners2 mt-5 mb-5">
        <div className="row mt-3 mb-5">
          <div className="col-md-12">
            <h4>
              {data.email} (role: {data.role}){" "}
            </h4>
          </div>
          <div className="col-md-12 mb-2">
            <div className="card h-90 mt-4 mb-4">
              <div className="card-body ms-2">
                <h5 className="card-title mb-4">User Information</h5>
                <div className="card-text">
                  <form className="row">
                    <div className="col-md-6">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          ชื่อ
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Firstname"
                          defaultValue={data.fname}
                          onChange={(e) =>
                            setState({ ...state, fname: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          นามสกุล
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lastname"
                          defaultValue={data.lname}
                          onChange={(e) =>
                            setState({ ...state, lname: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          หมายเลขโทรศัพท์
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="PhoneNumber"
                          defaultValue={data.phone}
                          onChange={(e) =>
                            setState({ ...state, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-12 text-end">
                      <Modal
                        title="ยืนยันข้อมูล"
                        context="คุณต้องการอัพเดทรายการนี้หรือไม่?"
                        text="Edit"
                        setFunc={(e) => {
                          e.preventDefault();
                          Edit1();
                        }}
                      ></Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card h-90 mt-4">
              <div className="card-body ms-2">
                <h5 className="card-title mb-4">Change Password</h5>
                <div className="card-text">
                  <form className="row">
                    <div className="col-md-6">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          Previous Password
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Previous Password"
                          onChange={(e) =>
                            setState({ ...state, pre_password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          New Password
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New Password"
                          onChange={(e) =>
                            setState({ ...state, new_password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-12 text-end">
                      <Modal
                        title="ยืนยันข้อมูล"
                        context="คุณต้องการอัพเดทรายการนี้หรือไม่?"
                        text="Edit"
                        setFunc={(e) => {
                          e.preventDefault();
                          Edit2();
                        }}
                      ></Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
