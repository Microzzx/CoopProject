//THIS PAGE MADE FOR ADMIN
import React, { useState } from "react";
import Axios from "axios";
import "../css/datapage.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import edit_btn from "../image/edit_icon.jpg";
import delete_btn from "../image/delete_icon.jpg";
import view_btn from "../image/view_icon.png";
import Mdbody from "./sub_components/modalbody";

function Form3() {
  //new data set for render on table
  const [comlist, setComList] = useState([]);
  //new data
  const [newcomment, setNewComment] = useState("-");
  const [newstatus, setNewStatus] = useState("Approved");
  const [newworkrole, setNewworkrole] = useState("-");
  //modal info
  const [modalinfo, setModalInfo] = useState([]);
  //modal toggle
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const GetCompanies = () => {
    Axios.get("http://localhost:3001/companyinfo").then((response) => {
      setComList(response.data);
    });
  };

  const updateCompany = (id) => {
    Axios.put("http://localhost:3001/companyedit", {
      comment: newcomment,
      status: newstatus,
      workrole: newworkrole,
      id: id,
    })
      .then((response) => {
        setComList(
          comlist.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  time: val.time,
                  email: val.email,
                  name: val.name,
                  province: val.province,
                  worktype: val.worktype,
                  status: val.status,
                }
              : val;
          })
        );
        alert("Data Updated!");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
      });
  };

  const deleteCompany = (id) => {
    const token = localStorage.getItem("token");
    //console.log(token)
    Axios.delete(`http://localhost:3001/companydelete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status == "error") {
          alert("Error: " + response.data.message);
        } else {
          setComList(
            comlist.filter((val) => {
              return val.id !== id;
            })
          );
          alert("Data Deleted!");
        }
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  };

  window.onload = function () {
    GetCompanies();
  };

  // document.body.style.overflow = "hidden";
  return (
    <div>
      <table className="table table-dark tableheader">
        <thead>
          <tr>
            <th scope="col" className="tablecol1 center">
              No.
            </th>
            <th scope="col" className="tablecol2 center">
              Time
            </th>
            <th scope="col" className="tablecol2 center">
              Email
            </th>
            <th scope="col" className="tablecol1 center">
              Name
            </th>
            <th scope="col" className="tablecol2 center">
              Province
            </th>
            <th scope="col" className="tablecol2 center">
              Type
            </th>
            <th scope="col" className="tablecol2 center">
              Status
            </th>
            <th scope="col" className="tablecol1 center"></th>
            <th scope="col" className="tablecol1 center"></th>
          </tr>
        </thead>
        {comlist.map((val, key) => {
          return (
            <tbody>
              <tr>
                <td scope="row" className="tablecol1">
                  {key + 1}
                </td>
                <td className="tablecol2">{val.time}</td>
                <td className="tablecol2">{val.email}</td>
                <td className="tablecol1">{val.name}</td>
                <td className="tablecol2">{val.province}</td>
                <td className="tablecol2">{val.worktype}</td>
                <td className="tablecol2">{val.status}</td>
                <td className="tablecol1">
                  <input
                    className="btnsize mrc"
                    type="image"
                    src={view_btn}
                    onClick={() => {
                      setModalInfo(val);
                      toggle();
                    }}
                  ></input>

                  <Modal isOpen={modal} toggle={toggle} className="modalsize">
                    <ModalHeader toggle={toggle} className="ms-3 mt-3">
                      บริษัท {modalinfo.name}
                    </ModalHeader>
                    <ModalBody className="ms-3">
                      <Mdbody modalinfo={modalinfo} />
                    </ModalBody>
                    <ModalFooter>
                      <div className="row">
                        <div className="col">
                          <input
                            className="btnsize"
                            title="Comment"
                            type="image"
                            src={edit_btn}
                            value="Comment"
                            onClick={() => {
                              updateCompany(modalinfo.id);
                            }}
                          ></input>
                        </div>
                        <div className="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked={newstatus === "Approved"}
                              onChange={() => setNewStatus("Approved")}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDisabled"
                            >
                              Approve
                            </label>
                          </div>

                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked={newstatus === "Decline"}
                              onChange={() => setNewStatus("Decline")}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDisabled"
                            >
                              Decline
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <Button
                            color="success"
                            onClick={() => {
                              updateCompany(modalinfo.id);
                            }}
                          >
                            Confirm
                          </Button>
                        </div>
                      </div>
                    </ModalFooter>
                  </Modal>
                </td>
                <td className="tablecol1">
                  <button
                    className="btnsize mrc"
                    onClick={() => {
                      deleteCompany(val.id);
                    }}
                  >
                    <img
                      className="btnsize mrc"
                      src={delete_btn}
                      alt="delete_button"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
//
export default Form3;
