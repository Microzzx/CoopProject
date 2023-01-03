import React, { useState, useRef } from "react";
import "../css/form.css";
import firebase from "firebase/app";
import "firebase/database";
import Input from "./input";
import Textarea from "./textarea";
import AutoAddress from "./autoaddress";
import Employee from "./employee";

function Form() {
  //1
  const [comname, setComName] = useState("");
  const [comage, setComAge] = useState("");
  //2
  const [subdistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");

  function onSelect(fulladdress) {
    const { subdistrict, district, province, zipcode } = fulladdress;
    setSubDistrict(subdistrict);
    setDistrict(district);
    setProvince(province);
    setZipcode(zipcode);
  }
  //3
  const [worktype, setWorktype] = useState("");
  //4
  const [toughness, setToughness] = useState("");
  //5
  const [weakness, setWeakness] = useState("");
  //6
  const [exwork, setExwork] = useState("");
  //7
  const [civil, setCivil] = useState("");
  const [electrical, setElectrical] = useState("");
  const [fore, setFore] = useState("");
  const [chief1, setChief1] = useState("");
  const [chief2, setChief2] = useState("");
  const [chief3, setChief3] = useState("");
  const [mechanic1, setMechanic1] = useState("");
  const [mechanic2, setMechanic2] = useState("");
  const [mechanic3, setMechanic3] = useState("");
  const [worker, setWorker] = useState("");
  //8
  const [ocivil, setOCivil] = useState("");
  const [oelectrical, setOElectrical] = useState("");
  const [ofore, setOFore] = useState("");
  const [ochief1, setOChief1] = useState("");
  const [ochief2, setOChief2] = useState("");
  const [ochief3, setOChief3] = useState("");
  const [omechanic1, setOMechanic1] = useState("");
  const [omechanic2, setOMechanic2] = useState("");
  const [omechanic3, setOMechanic3] = useState("");
  const [oworker, setOWorker] = useState("");
  //9
  const [tools, setTools] = useState("");
  //10
  const [branch, setBranch] = useState("");
  //11
  const [provinces, setProvinces] = useState("");

  // Firebase Data
  function InsertData() {
    firebase
      .database()
      .ref("Company/")
      .push()
      .set({
        CompanyName: comname,
        CompanyAge: comage,
        Subdistrict: subdistrict,
        District: district,
        Province: province,
        Zipcode: zipcode,
        Worktype: worktype,
        Toughness: toughness,
        Weakness: weakness,
        Exwork: exwork,
        Fulltime: {
          Civil: civil,
          Electrical: electrical,
          Fore: fore,
          Chief1: chief1,
          Chief2: chief2,
          Chief3: chief3,
          Mechanic1: mechanic1,
          Mechanic2: mechanic2,
          Mechanic3: mechanic3,
          Worker: worker,
        },
        Outsource: {
          OCivil: ocivil,
          OElectrical: oelectrical,
          OFore: ofore,
          OChief1: ochief1,
          OChief2: ochief2,
          OChief3: ochief3,
          OMechanic1: omechanic1,
          OMechanic2: omechanic2,
          OMechanic3: omechanic3,
          OWorker: oworker,
        },
        Tools: tools,
        Branch: branch,
        Provinces: provinces,
      })
      .then(() => {
        alert("data stored");
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
      });
  }
  //
  const formRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    if (formRef.current.checkValidity()) {
      InsertData();
    }
  }
  //
  //---------------------------------------------------------
  return (
    <div className="container bgc top-buffer mt-5 mb-5 rcorners2">
      <form class="needs-validation" novalidate>
        {/* form tag */}
        <div className="row row-cols-auto g-4">
          <h2 className="center">แบบสอบถามประวัติผู้รับเหมารายใหม่</h2>
          <div className="dropdown-container"></div>
        </div>
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
          <label className="label">2. สถานที่ตั้งบริษัท</label>
        </div>
        <AutoAddress
          subdistrict={subdistrict}
          setSubDistrict={setSubDistrict}
          district={district}
          setDistrict={setDistrict}
          province={province}
          setProvince={setProvince}
          zipcode={zipcode}
          setZipcode={setZipcode}
          onSelect={onSelect}
        />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                3. ประเภทงาน (ความสามารถด้านงานก่อสร้าง หรืองานไฟฟ้า)
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setWorktype(e.target.value);
                }}
              >
                <option defaultValue>เลือกประเภทงาน</option>
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
                value={toughness}
                type={"text"}
                placeholder={"ระบุตัวอย่าง"}
                setFunc={setToughness}
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
              value={weakness}
              type={"text"}
              placeholder={"ระบุตัวอย่าง"}
              setFunc={setWeakness}
            ></Input>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">6. ผลงานที่โดดเด่นมีอะไรบ้าง</label>
              <Textarea
                id={"inputExwork"}
                value={exwork}
                string={"ระบุผลงาน"}
                row={4}
                setFunc={setExwork}
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <label className="label">7. มีพนักงานประจำทั้งหมดที่คน</label>
        </div>
        <Employee
          civil={civil}
          setCivil={setCivil}
          electrical={electrical}
          setElectrical={setElectrical}
          fore={fore}
          setFore={setFore}
          chief1={chief1}
          setChief1={setChief1}
          chief2={chief2}
          setChief2={setChief2}
          chief3={chief3}
          setChief3={setChief3}
          worker={worker}
          setWorker={setWorker}
          mechanic1={mechanic1}
          setMechanic1={setMechanic1}
          mechanic2={mechanic2}
          setMechanic2={setMechanic2}
          mechanic3={mechanic3}
          setMechanic3={setMechanic3}
        />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col">
            <label className="label">
              8. มีพนักงานชั่วคราวทั้งหมดที่คน (OUTSOURCE)
            </label>
          </div>
        </div>
        <Employee
          civil={ocivil}
          setCivil={setOCivil}
          electrical={oelectrical}
          setElectrical={setOElectrical}
          fore={ofore}
          setFore={setOFore}
          chief1={ochief1}
          setChief1={setOChief1}
          chief2={ochief2}
          setChief2={setOChief2}
          chief3={ochief3}
          setChief3={setOChief3}
          worker={oworker}
          setWorker={setOWorker}
          mechanic1={omechanic1}
          setMechanic1={setOMechanic1}
          mechanic2={omechanic2}
          setMechanic2={setOMechanic2}
          mechanic3={omechanic3}
          setMechanic3={setOMechanic3}
        />
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                9. เครื่องมือ/เครื่องจักร ที่มีอะไรบ้าง (เครื่องมือหนัก+ใหญ่)
              </label>
              <Textarea
                id={"inputtools"}
                value={tools}
                string={"ระบุเครื่องมือ"}
                row={4}
                setFunc={setTools}
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
                  value={branch}
                  type={"number"}
                  min="1"
                  placeholder={"ระบุจำนวน"}
                  setFunc={setBranch}
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
                value={provinces}
                type={"text"}
                placeholder={"ระบุจังหวัด"}
                setFunc={setProvinces}
              ></Input>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
