//THIS PAGE MADE FOR ADMIN
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/datapage.css";
import delete_btn from "../../image/delete_icon.jpg";
import view_btn from "../../image/view_icon.png";
import Grid from "@mui/material/Grid";

function TableA1() {
  //new data set for render on table
  const [comlist, setComList] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const GetCompanies = () => {
      Axios.get("http://localhost:3001/a1_get", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComList(response.data);
      });
    };
    GetCompanies();
  }, []);

  const deleteCompany = (id) => {
    Axios.delete(`http://localhost:3001/a1_delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
          
        } else { 
          setComList(
            comlist.filter((val) => {
              return val.id !== id;
            })
          );
          alert("Data Deleted!");
        }
        window.location.reload();
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  };

  const view = (id) => {
    window.location = `/viewA1/${id}`;
  };

  // document.body.style.overflow = "hidden";
  return (
    <Grid container component="main" sx={{ height: "86.5vh" }}>
      <h2 className="center">ตารางข้อมูลฟอร์ม A1</h2>
      <div className="table-wrap">
        <table className="table table-hover tableFixHead">
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
              <th scope="col" className="tablecol2">
                Name
              </th>
              <th scope="col" className="tablecol1">
                Province
              </th>
              <th scope="col" className="tablecol2">
                Type
              </th>
              <th scope="col" className="tablecol1">
                Status
              </th>
              <th scope="col" className="tablecol1"></th>
              <th scope="col" className="tablecol1"></th>
            </tr>
          </thead>
          {comlist.map((val, index) => {
            return (
              <tbody key={index}>
                <tr className="center">
                  <td scope="row">
                    {index + 1}
                  </td>
                  <td>{val.time}</td>
                  <td>{val.email}</td>
                  <td>{val.comname}</td>
                  <td>{val.province}</td>
                  <td>{val.worktype}</td>
                  <td>
                    <span
                      style={{
                        color:
                          val.status === "Approved"
                            ? "green"
                            : val.status === "Declined"
                            ? "red"
                            : "orange",
                      }}
                    >
                      {val.status}
                    </span>
                  </td>
                  <td className="tablecol1">
                    <input
                      className="btnsize mrc"
                      type="image"
                      alt="view_btn"
                      src={view_btn}
                      onClick={() => {
                        view(val.a1_id);
                      }}
                    ></input>
                  </td>
                  <td className="tablecol1">
                    <button
                      className="btnsize mrc"
                      onClick={() => {
                        deleteCompany(val.a1_id);
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
    </Grid>
  );
}
//
export default TableA1;
