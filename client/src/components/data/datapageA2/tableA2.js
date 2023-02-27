//THIS PAGE MADE FOR ADMIN
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../css/datapage.css";
import delete_btn from "../../../image/delete_icon.jpg";
import Paper from "@mui/material/Paper";
import Modal from "../../sub_components/modal";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

function TableA2() {
  //new data set for render on table
  const [comlist, setComList] = useState([]);
  const [sortkey, setSortKey] = useState("index");
  const [asc, setAsc] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const GetCompanies = () => {
      Axios.get("http://localhost:3001/a2/get", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        let arr = response.data.map((v, i) => ({ index: i, ...v }));
        setComList(arr);
      });
    };
    GetCompanies();
  }, []);

  const deleteCompany = (id) => {
    Axios.delete(`http://localhost:3001/a2/delete/${id}`, {
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
    window.location = `/data/viewA2/${id}`;
  };

  const handleSort = (key) => {
    setAsc(key === sortkey ? !asc : true);
    setSortKey(key);
    let arr = comlist
      .slice()
      .sort((a, b) => a[key].toString().localeCompare(b[key].toString()));
    if (!asc) arr.reverse();
    setComList(arr);
  };

  const TableCol = (props) => {
    return (
      <TableCell
        align="center"
        style={{ width: props.width, cursor: "pointer", userSelect: "none" }}
        onClick={(e) => {
          handleSort(props.sortkey);
        }}
      >
        {props.children}
        {sortkey === props.sortkey && asc && <ExpandLessIcon />}
        {sortkey === props.sortkey && !asc && <ExpandMoreIcon />}
      </TableCell>
    );
  };

  return (
    <Box component="main" sx={{ height: "87.1vh" }}>
      <h2 style={{ padding: "50px" }} className="center">
        ตารางข้อมูลฟอร์ม A2
      </h2>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCol width="11%" sortkey="index">
                <b>ลำดับ</b>
              </TableCol>
              <TableCol width="11%" sortkey="time">
                <b>เวลา</b>
              </TableCol>
              <TableCol width="11%" sortkey="email">
                <b>อีเมลล์</b>
              </TableCol>
              <TableCol width="11%" sortkey="comname">
                <b>ชื่อบริษัท</b>
              </TableCol>
              <TableCol width="11%" sortkey="phone">
                <b>หมายเลขโทรศัพท์</b>
              </TableCol>
              <TableCol width="11%" sortkey="worktype">
                <b>ประเภทงาน</b>
              </TableCol>
              <TableCol width="11%" sortkey="status">
                <b>สถานะ</b>
              </TableCol>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comlist.map((val, index) => (
              <TableRow key={index} className="center">
                <TableCell scope="row" align="center">
                  {val.index + 1}
                </TableCell>
                <TableCell align="center">{val.time}</TableCell>
                <TableCell align="center">{val.email}</TableCell>
                <TableCell align="center">{val.name}</TableCell>
                <TableCell align="center">{val.phone}</TableCell>
                <TableCell align="center">{val.worktype}</TableCell>
                <TableCell align="center">
                  <span
                    style={{
                      color:
                        val.status === "Approved" ||
                        val.status === "Approved_extra"
                          ? "green"
                          : val.status === "Declined" ||
                            val.status === "Declined_extra"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {val.status}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      view(val.a2_id);
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Modal
                    title="ลบข้อมูล"
                    context="คุณแน่ใจที่จะลบรายการนี้หรือไม่?"
                    img={delete_btn}
                    setFunc={() => {
                      deleteCompany(val.a2_id);
                    }}
                  ></Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
//
export default TableA2;
