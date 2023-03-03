import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../css/datapage.css";
import delete_btn from "../../../image/delete_icon.jpg";
import Modal from "../../sub_components/modal";
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
  const [a2list, setA2List] = useState([]);
  const [sortkey, setSortKey] = useState("index");
  const [asc, setAsc] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const GetA2 = () => {
      Axios.get("http://localhost:3001/a2/get", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.data.status === "error") {
            alert("Error: " + response.data.message);
          } else {
            let arr = response.data.map((v, i) => ({ index: i, ...v }));
            setA2List(arr);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    GetA2();
  }, []);

  const DeleteA2 = (id) => {
    let obj = a2list.find((obj) => obj.a2_id === id);
    const deleteUrl = obj.url17
      ? `http://localhost:3001/a2/deletefull/${id}`
      : `http://localhost:3001/a2/delete/${id}`;
    Axios.delete(deleteUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
          setA2List(
            a2list.filter((val) => {
              return val.id !== id;
            })
          );
          alert(response.data.message);
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const View = (id) => {
    window.location = `/data/viewA2/${id}`;
  };

  const handleSort = (key) => {
    setAsc(key === sortkey ? !asc : true);
    setSortKey(key);
    let arr = a2list
      .slice()
      .sort((a, b) => a[key].toString().localeCompare(b[key].toString()));
    if (!asc) arr.reverse();
    setA2List(arr);
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
    <Box component="main" sx={{ height: "94.3vh", paddingTop: "60px" }}>
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
            {a2list.map((val, index) => (
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
                      View(val.a2_id);
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
                      DeleteA2(val.a2_id);
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
