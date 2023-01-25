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
  const [comlist, setComList] = useState([]);
  const [newage, setNewAge] = useState(0);

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

  const updateCompanyAge = (id) => {
    Axios.put("http://localhost:3001/companyedit", {
      age: newage,
      id: id,
    })
      .then((response) => {
        setComList(
          comlist.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  time: val.time,
                  name: val.name,
                  age: newage,
                  province: val.province,
                  worktype: val.worktype,
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
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        setComList(
          comlist.filter((val) => {
            return val.id !== id;
          })
        );
        alert("Data Deleted!"+response.data.message);
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
      });
  };

  window.onload = function () {
    GetCompanies();
  };

  const print = (val) => {
    console.log(val);
  };
  document.body.style.overflow = "hidden";
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
              Name
            </th>
            <th scope="col" className="tablecol1 center">
              Age
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
      </table>
      {comlist.map((val, key) => {
        return (
          <table className="table">
            <tbody>
              <tr>
                <td scope="row" className="tablecol1">
                  {key + 1}
                </td>
                <td className="tablecol2">{val.time}</td>
                <td className="tablecol2">{val.name}</td>
                <td className="tablecol1">{val.age}</td>
                <td className="tablecol2">{val.province}</td>
                <td className="tablecol2">{val.worktype}</td>
                <td className="tablecol2">x</td>
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
                      <Mdbody
                        name={modalinfo.name}
                        age={modalinfo.age}
                        subdistrict={modalinfo.subdistrict}
                        district={modalinfo.district}
                        province={modalinfo.province}
                        zipcode={modalinfo.zipcode}
                        worktype={modalinfo.worktype}
                        toughness={modalinfo.toughness}
                        weakness={modalinfo.weakness}
                        exwork={modalinfo.exwork}
                        civil={modalinfo.civil}
                        electrical={modalinfo.electrical}
                        fore={modalinfo.fore}
                        chief1={modalinfo.chief1}
                        chief2={modalinfo.chief2}
                        chief3={modalinfo.chief3}
                        mechanic1={modalinfo.mechanic1}
                        mechanic2={modalinfo.mechanic2}
                        mechanic3={modalinfo.mechanic3}
                        worker={modalinfo.worker}
                        ocivil={modalinfo.ocivil}
                        oelectrical={modalinfo.oelectrical}
                        ofore={modalinfo.ofore}
                        ochief1={modalinfo.ochief1}
                        ochief2={modalinfo.ochief2}
                        ochief3={modalinfo.ochief3}
                        omechanic1={modalinfo.omechanic1}
                        omechanic2={modalinfo.omechanic2}
                        omechanic3={modalinfo.omechanic3}
                        oworker={modalinfo.worker}
                        tools={modalinfo.tools}
                        branch={modalinfo.branch}
                        provinces={modalinfo.provinces}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <div className="row">
                        <div className="col">
                          <input
                            className="btnsize"
                            type="image"
                            src={edit_btn}
                            onClick={() => {
                              updateCompanyAge(modalinfo.id);
                              console.log(modalinfo.id);
                            }}
                          ></input>
                        </div>
                        <div className="col">
                          <Button color="secondary" onClick={toggle}>
                            อนุมัติ
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
          </table>
        );
      })}
    </div>
  );
}
//
export default Form3;
