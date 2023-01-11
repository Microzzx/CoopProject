//THIS PAGE MADE FOR ADMIN
import React, { useState } from "react";
import Axios from "axios";
import "../css/datapage.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
      alert("Data Deleted!");
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
  return (
    <div className="container-{100} tbc">
      <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col" className="tablecol1">No.</th>
              <th scope="col" className="tablecol2">Time</th>
              <th scope="col" className="tablecol3">Name</th>
              <th scope="col" className="tablecol1">Age</th>
              <th scope="col" className="tablecol3">Province</th>
              <th scope="col" className="tablecol2">Type</th>
              <th scope="col" className="tablecol4"></th>
            </tr>
          </thead>
      </table>
      {comlist.map((val, key) => {
        return (
          <table class="table">
          <tbody>
            <tr>
              <td className="tablecol1">{key+1}</td>
              <td className="tablecol2">{val.time}</td>
              <td className="tablecol3">{val.name}</td>
              <td className="tablecol1">{val.age}</td>
              <td className="tablecol3">{val.province}</td>
              <td className="tablecol2">{val.worktype}</td>
              <td className="tablecol4">
              
              <Button color="danger" onClick={() => {setModalInfo(val); toggle();}}>
                Click Me
              </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalinfo.name}</ModalHeader>
        <ModalBody>
        ชื่อบริษัท : {modalinfo.name}<br/>
        อายุบริษัท : {modalinfo.age}<br/>
        ที่อยู่ : {modalinfo.subdistrict} {modalinfo.district} {modalinfo.province} {modalinfo.zipcode}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
            
                {/* <input
                  className="mrc"
                  type="number"
                  placeholder="Insert Number"
                  onChange={(event) => {
                    setNewAge(event.target.value);
                  }}
                /> */}
                <button
                  className="btn btn-warning mrc"
                  onClick={() => {
                    //updateCompanyAge(val.id);
                    console.log(val.id);
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
              </td>
            
            </tr>
          </tbody>
        </table>
            );
            
              // <p className="card-text">Age: {val.age}</p>
              // <p className="card-text">Subdistrict: {val.subdistrict}</p>
              // <p className="card-text">District: {val.district}</p>
              // <p className="card-text">Province: {val.province}</p>
              // <p className="card-text">Zipcode: {val.zipcode}</p>
              // <p className="card-text">Worktype: {val.worktype}</p>
              // <p className="card-text">Toughness: {val.toughness}</p>
              // <p className="card-text">Weakness: {val.weakness}</p>
              // <p className="card-text">Exwork: {val.exwork}</p>
              // <p className="card-text">Civil: {val.civil}</p>
              // <p className="card-text">Electrical: {val.electrical}</p>
              // <p className="card-text">Fore: {val.fore}</p>
              // <p className="card-text">Chief1: {val.chief1}</p>
              // <p className="card-text">Chief2: {val.chief2}</p>
              // <p className="card-text">Chief3: {val.chief3}</p>
              // <p className="card-text">Mechanic1: {val.mechanic1}</p>
              // <p className="card-text">Mechanic2: {val.mechanic2}</p>
              // <p className="card-text">Mechanic3: {val.mechanic3}</p>
              // <p className="card-text">Worker: {val.worker}</p>
              // <p className="card-text">OCivil: {val.ocivil}</p>
              // <p className="card-text">OElectrical: {val.oelectrical}</p>
              // <p className="card-text">OFore: {val.ofore}</p>
              // <p className="card-text">OChief1: {val.ochief1}</p>
              // <p className="card-text">OChief2: {val.ochief2}</p>
              // <p className="card-text">OChief3: {val.ochief3}</p>
              // <p className="card-text">OMechanic1: {val.omechanic1}</p>
              // <p className="card-text">OMechanic2: {val.omechanic2}</p>
              // <p className="card-text">OMechanic3: {val.omechanic3}</p>
              // <p className="card-text">OWorker: {val.oworker}</p>
              // <p className="card-text">Tools: {val.tools}</p>
              // <p className="card-text">Branch: {val.branch}</p>
              // <p className="card-text">Provinces: {val.provinces}</p>

              
           
          
        
      })}
    </div>
  );
}
//
export default Form3;
