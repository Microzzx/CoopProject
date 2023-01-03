import React, { useState } from "react";
import Input from "./input";
import Axios from "axios";
import "../css/form2.css";

function Form2() {
  const [comname, setComName] = useState("");
  const [comage, setComAge] = useState("");
  const [comlist, setComList] = useState([]);

  const GetCompanies = () => {
    Axios.get("http://localhost:3001/companies").then((response) => {
    setComList(response.data);
    });
  }

  const PostCompanies = () => {
    Axios.post("http://localhost:3001/create",{
        name: comname,
        age : comage
    }).then(() => {
        setComList([...comlist,
        {
            name: comname,
            age : comage
        }
    ])
    })
  }

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
          className="btn btn-primary"
          type="submit"
          onClick={PostCompanies}
        >
          Submit
        </button>
        
      </div>
      <button
          className="btn btn-primary"
          onClick={GetCompanies}
        >
          ShowData
        </button>
      {comlist.map((val, key) => {
            return (
                <div className="company card">
                    <div className="card-body text-left ">
                    <p className="card-text">Name: {val.name}</p>
                    <p className="card-text">Age: {val.age}</p>
                    </div>
                </div>
            )
        })}
    </form>
  );
}
//
export default Form2;
