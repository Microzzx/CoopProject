//THIS PAGE MADE FOR ADMIN
import React, { useState } from "react";
import Axios from "axios";
import "../css/form3.css";

function Form3() {
  const [comlist, setComList] = useState([]);
  const [newage, setNewAge] = useState(0);

  const GetCompanies = () => {
    Axios.get("http://localhost:3001/companies").then((response) => {
      setComList(response.data);
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

  window.onload = function () {
    GetCompanies();
  };

  return (
    <div>
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
                  className="btn btn-warning mrc"
                  onClick={() => {
                    updateCompanyAge(val.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mrc"
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
    </div>
  );
}
//
export default Form3;
