import React, { useState, useRef } from "react";
import "../css/form.css";
import Input from "./sub_components/input";
import Textarea from "./sub_components/textarea";
import AutoAddress from "./sub_components/autoaddress";
import Employee from "./sub_components/employee";
import Axios from "axios";

const joblist = {
  civil: "",
  electrical: "",
  fore: "",
  chief1: "",
  chief2: "",
  chief3: "",
  mechanic1: "",
  mechanic2: "",
  mechanic3: "",
  worker: "",
};
function FormA1() {
  const [state, setState] = useState({
    name: "",
    age: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
    worktype: "",
    toughness: "",
    weakness: "",
    exwork: "",
    fulltime: { ...joblist },
    outsource: { ...joblist },
    tools: "",
    branch: "",
    provinces: "",
  });

  function onSelect(fulladdress) {
    const { subdistrict, district, province, zipcode } = fulladdress;
    setState({
      ...state,
      subdistrict: subdistrict,
      district: district,
      province: province,
      zipcode: zipcode,
    });
  }

  const [comlist, setComList] = useState([]);

  const PostCompanies = (e) => {
    e.preventDefault()
    console.log(state)
    const token = localStorage.getItem("token");
    Axios.post("http://localhost:3001/companyinput", state, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status == "error") {
          alert("Error: " + response.data.message);
        } else {
        setComList([...comlist, state]);
        alert("Data Inserted!");
        window.location = '/document'
        }
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  };
  
  //---------------------------------------------------------
  return (
    <div className="container bgc top-buffer mt-5 mb-5 rcorners2">
      <form onSubmit={PostCompanies}>
        <div className="row row-cols-auto g-4">
          <h2 className="center mtc mbc">แบบสอบถามประวัติผู้รับเหมารายใหม่</h2>
          <div className="dropdown-container"></div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-4">
            <div className="field">
              <label className="label">1. ชื่อบริษัท</label>
              <Input
                id={"validationDefaultUsername"}
                value={state.name}
                type="text"
                placeholder={"ระบุชื่อ"}
                setFunc={(e) => setState({ ...state, name: e.target.value })}
              ></Input>
            </div>
          </div>
          <div className="col-md-2">
            <div className="field">
              <label className="label md-5">อายุบริษัท</label>
              <div className="input-group mb-3">
                <Input
                  id={"inputComAge"}
                  value={state.age}
                  type={"number"}
                  min="0"
                  placeholder={"ระบุอายุ"}
                  setFunc={(e) => setState({ ...state, age: e.target.value })}
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
          <label className="label">2. สถานที่ตั้งบริษัท</label>
        </div>
        <AutoAddress state={state} setState={setState} onSelect={onSelect} />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">3. ประเภทงาน</label>
              <select
                required
                className="form-select"
               
                aria-label="Default select example"
                onChange={(e) => {
                  setState({ ...state, worktype: e.target.value });
                }}
              >
                <option value="">กรุณาเลือกประเภทงาน</option>
                <option value="ผู้รับเหมาก่อสร้าง">ผู้รับเหมาก่อสร้าง</option>
                <option value="ผู้รับเหมาไฟฟ้า">ผู้รับเหมาไฟฟ้า</option>
                <option value="ผู้รับเหมาเบลลินี่">ผู้รับเหมาเบลลินี่</option>
                <option value="ผู้รับเหมางานซ่อมปรับปรุง">
                  ผู้รับเหมางานซ่อมปรับปรุง
                </option>
                <option value="ผู้รับเหมาทำความสะอาด">
                  ผู้รับเหมาทำความสะอาด
                </option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                4. งานที่ถนัด (งานตกแต่งก่อสร้าง) เช่น
              </label>
              <Input
                id={"inputToughness"}
                value={state.toughness}
                type={"text"}
                placeholder={"ระบุตัวอย่าง"}
                setFunc={(e) =>
                  setState({ ...state, toughness: e.target.value })
                }
              ></Input>
            </div>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                5. งานที่ไม่ถนัด (งานตกแต่งก่อสร้าง) เช่น
              </label>
            </div>
            <Input
              id={"inputWeakness"}
              value={state.weakness}
              type={"text"}
              placeholder={"ระบุตัวอย่าง"}
              setFunc={(e) => setState({ ...state, weakness: e.target.value })}
            ></Input>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">6. ผลงานที่โดดเด่นมีอะไรบ้าง</label>
              <Textarea
                id={"inputExwork"}
                value={state.exwork}
                string={"ระบุผลงาน"}
                row={4}
                setFunc={(e) => setState({ ...state, exwork: e.target.value })}
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <label className="label">7. มีพนักงานประจำทั้งหมดที่คน</label>
        </div>
        <Employee joblist={state.fulltime} onChange={(data) => setState({...state,fulltime:{...state.fulltime,...data}})} />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col">
            <label className="label">
              8. มีพนักงานชั่วคราวทั้งหมดที่คน (OUTSOURCE)
            </label>
          </div>
        </div>
        <Employee joblist={state.outsource} onChange={(data) => setState({...state,outsource:{...state.outsource,...data}})} />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                9. เครื่องมือ/เครื่องจักร ที่มีอะไรบ้าง (เครื่องมือหนัก+ใหญ่)
              </label>
              <Textarea
                id={"inputtools"}
                value={state.tools}
                string={"ระบุเครื่องมือ"}
                row={4}
                setFunc={(e) => setState({ ...state, tools: e.target.value })}
              ></Textarea>
            </div>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col">
            <div className="field">
              <label className="label">
                10. งานที่ตั้งเป้าจะรับงานกับ 7-11 กี่สาขา/เดือน
              </label>
              <div className="input-group mb-4">
                <Input
                  id={"inputBranch"}
                  value={state.branch}
                  type={"number"}
                  min="1"
                  placeholder={"ระบุจำนวน"}
                  setFunc={(e) => setState({ ...state, branch: e.target.value })}
                ></Input>
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    สาขา
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <div className="col col-lg-6">
            <div className="field">
              <label className="label">
                11. จังหวัดที่สามารถรับงานได้ จังหวัดอะไรบ้าง
              </label>
              <Input
                id={"inputProvinces"}
                value={state.provinces}
                type={"text"}
                placeholder={"ระบุจังหวัด"}
                setFunc={(e) => setState({ ...state, provinces: e.target.value })}
              ></Input>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormA1;