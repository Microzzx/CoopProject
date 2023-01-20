import React, { useState } from "react";
import Input from "./sub_components/input";
import Axios from "axios";
import "../css/form2.css";

function Form2() {
  const [comname, setComName] = useState("");
  const [comage, setComAge] = useState(0);
  const [comlist, setComList] = useState([]);
  const [newage, setNewAge] = useState(0);

  const GetCompanies = () => {
    Axios.get("http://localhost:3001/companies").then((response) => {
      setComList(response.data);
    });
  };
  
  const PostCompanies = () => {
    Axios.post("http://localhost:3001/create", {
      name: comname,
      age: comage,
    }).then(() => {
      setComList([
        ...comlist,
        {
          name: comname,
          age: comage,
        },
      ]);
    });
  };

  const updateCompanyAge = (id) => {
    Axios.put("http://localhost:3001/update", {
      age: newage,
      id: id,
    })
      .then((response) => {
        setComList(
          comlist.map((val) => {
            return val.id == id
              ? { id: val.id, name: val.name, age: newage }
              : val;
          })
        );
        alert("Data Updated!");
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
      });
  };

  const deleteCompany = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setComList(
        comlist.filter((val) => {
          return val.id != id;
        })
      );
      alert("Deleted!");
    });
  };

  return (
    <form>
      <div className="row row-cols-auto g-3 top-row">
        <div className="col-md-4">
          <div className="field">
            <label className="label">1. ชื่อบริษัท</label>
            <Input
              id={"validationDefaultUsername"}
              value={comname}
              type={"text"}
              placeholder={"ระบุชื่อ"}
              setFunc={setComName}
            ></Input>
          </div>
        </div>
        <div className="col-md-2">
          <div className="field">
            <label className="label md-5">อายุบริษัท</label>
            <div className="input-group mb-3">
              <Input
                id={"inputComAge"}
                value={comage}
                type={"number"}
                min="0"
                placeholder={"ระบุอายุ"}
                setFunc={setComAge}
              ></Input>
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  ปี
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-auto g-3 top-row">
        <button
          className="btn btn-primary btnsize mb2"
          type="submit"
          onClick={PostCompanies}
        >
          Submit
        </button>
      </div>
      <button className="btn btn-primary btnsize mb2" onClick={GetCompanies}>
        ShowData
      </button>
      {comlist.map((val, key) => {
        return (
          <div className="company card">
            <div className="card-body text-left ">
              <p className="card-text">Name: {val.name}</p>
              <p className="card-text">Age: {val.age}</p>
              <div className="d-flex">
                <input
                  className="mrc"
                  type="number"
                  placeholder="Insert Number"
                  onChange={(event) => {
                    setNewAge(event.target.value);
                  }}
                />
                <button
                  className="btn btn-warning mr2"
                  onClick={() => {
                    updateCompanyAge(val.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mr2"
                  onClick={() => {
                    deleteCompany(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
}
//
export default Form2;
