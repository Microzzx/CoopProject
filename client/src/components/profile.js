import React, { useState, useEffect } from "react";
import "../css/profile.css";
import Axios from "axios";
import Modal from "./sub_components/modal";
import Loading from "./loading";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //pic-modal
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    clearFileInput();
    setOpen(false);
  };

  const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    pre_password: "",
    new_password: "",
    image: null,
  });

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      Axios.get(`${process.env.REACT_APP_API}/user/get`, {
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
      `${process.env.REACT_APP_API}/user/edit`,
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
        alert(response.data.message);
        window.location.reload(false);
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        window.location.reload(false);
      });
  };

  const Edit2 = () => {
    const token = localStorage.getItem("token");
    Axios.put(
      `${process.env.REACT_APP_API}/user/edit/password`,
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setState({ ...state, image: reader.result });
      handleClickOpen();
    };
  };

  function clearFileInput() {
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.value = "";
  }

  const Edit3 = (e) => {
    e.preventDefault();
    console.log(state.image);
    const token = localStorage.getItem("token");
    Axios.post(
      `${process.env.REACT_APP_API}/user/edit/picture`,
      { image: state.image },
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
    <div
      className="container-fluid fixed-height"
      style={{ paddingTop: "70px" }}
    >
      <div className="container border shadow rcorners2 mt-5 mb-5 container-c">
        <div className="row mt-3">
          <div className="col-md-12 ms-2 mb-4">
            <h3 className="custom-heading">
              {data.email}{" "}
              <span
                className={`badge ${
                  data.role === "admin" ? "bg-danger" : "bg-info"
                }`}
              >
                {data.role}
              </span>
            </h3>
          </div>
          <div className="col-md-12 mb-2">
            <div className="card card-c mb-3">
              <div className="row g-0">
                <div className="col-lg-3 d-flex flex-column align-items-center text-center p-3 py-5 bg-c ">
                  <div className="profilepic">
                    <img
                      className="profilepic__image d-flex"
                      src={data.picture_url}
                      width="200"
                      height="200"
                      alt="Profile Picture"
                    />
                    <div className="profilepic__content">
                      <span className="profilepic__icon">
                        <i className="fas fa-camera"></i>
                      </span>
                      <span className="profilepic__text">Edit Picture</span>
                      <input
                        className="profilepic__input"
                        accept="image/png"
                        type="file"
                        onChange={handleImageChange}
                      ></input>
                    </div>
                  </div>
                </div>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    ยืนยันข้อมูล
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      คุณต้องการอัพเดทรูปโปรไฟล์หรือไม่?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={Edit3} autoFocus>
                      Confirm
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
                <div className="col-lg-9">
                  <div className="card-body mt-3 ms-4">
                    <h5 className="card-title">ข้อมูลผู้ใช้</h5>
                    <hr />
                    <div className="card-text mt-4">
                      <form className="row">
                        <div className="col-lg-6 mb-4">
                          <label className="labels label-input">ชื่อ</label>
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
                        <div className="col-lg-6 mb-4">
                          <label className="labels label-input">นามสกุล</label>
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
                        <div className="col-lg-6 mb-4">
                          <label className="labels label-input">
                            หมายเลขโทรศัพท์
                          </label>
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
                      </form>
                      <div className="row">
                        <div className="col-lg-12 text-end">
                          <Modal
                            title="ยืนยันข้อมูล"
                            context="คุณต้องการอัพเดทข้อมูลหรือไม่?"
                            text="Save"
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
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card h-90 mt-4">
              <div className="card-body mt-3 ms-2">
                <h5 className="card-title">เปลี่ยนรหัสผ่าน</h5>
                <hr />
                <div className="card-text">
                  <form className="row">
                    <div className="col-lg-6 mb-4">
                      <label className="labels label-input">รหัสผ่านเดิม</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Previous Password"
                        onChange={(e) =>
                          setState({ ...state, pre_password: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <label className="labels label-input">รหัสผ่านใหม่</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        onChange={(e) =>
                          setState({ ...state, new_password: e.target.value })
                        }
                      />
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-12 text-end">
                      <Modal
                        title="ยืนยันข้อมูล"
                        context="คุณต้องการเปลี่ยนรหัสผ่านหรือไม่?"
                        text="Save"
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
    </div>
  );
}
