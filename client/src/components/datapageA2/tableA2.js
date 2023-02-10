//THIS PAGE MADE FOR ADMIN
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/datapage.css";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import edit_btn from "../../image/edit_icon.jpg";
import delete_btn from "../../image/delete_icon.jpg";
import view_btn from "../../image/view_icon.png";
import Mdbody from "../sub_components/modalbody";
import Grid from "@mui/material/Grid";

function TableA2() {
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

  useEffect(() => {
    const GetCompanies = () => {
      Axios.get("http://localhost:3001/a2_image_get").then((response) => {
        setComList(response.data);
      });
    };
    GetCompanies();
  }, []);

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

  // document.body.style.overflow = "hidden";
  return (
    <Grid container component="main" sx={{ height: "86.5vh" }}>
      <h2 className="center">ตารางข้อมูลฟอร์ม A2</h2>
      <div className="table-wrap">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr className="center">
              <th scope="col" className="tablecol1">
                No.
              </th>
              <th scope="col" className="tablecol2">
                Time
              </th>
              <th scope="col" className="tablecol2">
                Email
              </th>
              <th scope="col" className="tablecol1">
                Name
              </th>
              <th scope="col" className="tablecol2">
                Province
              </th>
              <th scope="col" className="tablecol2">
                Type
              </th>
              <th scope="col" className="tablecol2">
                Status
              </th>
              <th scope="col" className="tablecol1"></th>
              <th scope="col" className="tablecol1"></th>
            </tr>
          </thead>
          {comlist.map((val, index) => {
            return (
              <tbody key={index}>
                {/* <Link to={`/viewA2/${val.id}`}>
                  <tr className="center">
                    <td scope="row" className="tablecol1">
                      {index + 1}
                    </td>
                    <td className="tablecol2">{val.time}</td>
                    <td className="tablecol2">{val.email}</td>
                    <td className="tablecol1">{val.name}</td>
                    <td className="tablecol2">{val.province}</td>
                    <td className="tablecol2">{val.worktype}</td>
                    <td className="tablecol2">{val.status}</td>
                  </tr>
                </Link> */}
              </tbody>
            );
          })}
        </table>
      </div>
    </Grid>
  );
}
//
export default TableA2;
