import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/datapage.css";
import delete_btn from "../image/delete_icon.jpg";
import Paper from "@mui/material/Paper";
import Modal from "./sub_components/modal";
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

function TableUser() {
  //new data set for render on table
  const [data, setData] = useState([]);
  const [sortkey, setSortKey] = useState("index");
  const [asc, setAsc] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUsers = () => {
      Axios.get("http://localhost:3001/user/get/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        //console.table(response.data);
        let arr = response.data.map((v, i) => ({ index: i, ...v }));
        setData(arr);
      });
    };
    getUsers();
  }, []);

  const deleteUsers = (id) => {
    Axios.delete(`http://localhost:3001/user/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
          setData(
            data.filter((val) => {
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

  const handleSort = (key) => {
    setAsc(key === sortkey ? !asc : true);
    setSortKey(key);
    let arr = data
      .slice()
      .sort((a, b) => a[key].toString().localeCompare(b[key].toString()));
    if (!asc) arr.reverse();
    setData(arr);
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
        ตารางข้อมูลผู้ใช้งาน
      </h2>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCol width="15%" sortkey="index">
                No.
              </TableCol>
              <TableCol width="15%" sortkey="email">
                Email
              </TableCol>
              <TableCol width="15%" sortkey="fname">
                Name
              </TableCol>
              <TableCol width="15%" sortkey="lname">
                Surname
              </TableCol>
              <TableCol width="15%" sortkey="phone">
                Phone
              </TableCol>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, index) => (
              <TableRow key={index} className="center">
                <TableCell scope="row" align="center">
                  {val.index + 1}
                </TableCell>
                <TableCell align="center">{val.email}</TableCell>
                <TableCell align="center">{val.fname}</TableCell>
                <TableCell align="center">{val.lname}</TableCell>
                <TableCell align="center">{val.phone}</TableCell>
                <TableCell align="center">
                  <Modal
                    title="ลบข้อมูล"
                    context="คุณแน่ใจที่จะลบรายการนี้หรือไม่?"
                    img={delete_btn}
                    setFunc={() => {
                      deleteUsers(val.user_id);
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

export default TableUser;
