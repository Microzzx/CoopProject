import React, { useState } from "react";
import "../css/form.css";
import Select from "react-select";
import { datas } from "../data";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";

function Form() {
  // Firebase Data
  const [comname, setComName] = useState("");
  const [comage, setComAge] = useState("");
  const [district, setDistrict] = useState("");
  const [amphoe, setAmphoe] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleOnChange0 = (e) => {
    setComName(e.target.value);
  };
  const handleOnChange1 = (e) => {
    setComAge(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setDistrict(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setAmphoe(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setProvince(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setZipcode(e.target.value);
  };

  //Fire base Insert Data ---------------------------------------------------------
  //  const comname = document.getElementById("inputComName");
  //  const comage = document.getElementById("inputComAge");
  //  const district = document.getElementById("inputDistrict");
  //  const amphoe = document.getElementById("inputAmphoe");
  //  const province = document.getElementById("inputProvince");
  //  const zipcode = document.getElementById("inputZipcode");

  const subbtn = document.getElementById("Subbtn");

  function InsertData() {
    const db = getDatabase();
    push(ref(db, "Company/"), {
      CompanyName: comname,
      CompanyAge: comage,
      District: district,
      Amphoe: amphoe,
      Province: province,
      Zipcode: zipcode,
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
  //---------------------------------------------------------
  // Select
  const [provinces, setProvinces] = useState("");
  const optionList = datas;
  function handleSelect(data) {
    setProvinces(data.value);
    console.log(data.value)
  }

  return (
    <div className="container bgc top-buffer mt-5 mb-5 rcorners2">
      <div>
        {/* form tag */}
        <div className="row row-cols-auto g-4">
          <h2 className="center">แบบสอบถามประวัติผู้รับเหมารายใหม่</h2>
          <div className="dropdown-container"></div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-4">
            <div className="field">
              <label className="label">1. ชื่อบริษัท</label>
              <input
                type="text"
                placeholder="ระบุชื่อ"
                className="form-control "
                id="inputComName"
                value={comname}
                onChange={handleOnChange0}
                
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="field">
              <label className="label md-5">อายุบริษัท</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุอายุ"
                  id="inputComAge"
                  value={comage}
                  onChange={handleOnChange1}
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    ปี
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Select
          options={optionList}
          placeholder="ระบุจังหวัด"
          value={provinces}
          onChange={handleSelect}
          isSearchable={true}
        />
        <div className="row row-cols-auto g-3 top-row">
          <label className="label">2. สถานที่ตั้งบริษัท</label>
        </div>

        <div className="form-group row row-cols-auto g-3 top-row">
          <div className="md-0"></div>
          <div className="col-sm-1 width5">
            <label className="label mt-1">ตำบล</label>
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              placeholder="ระบุตำบล"
              className="form-control mb-2 "
              id="inputDistrict"
              value={district}
              onChange={handleOnChange2}
            />
          </div>
          <div className="col-sm-1 width5">
            <label className="label mt-1">อำเภอ</label>
          </div>
          <div className="col-sm-2 ">
            <input
              type="text"
              placeholder="ระบุอำเภอ"
              className="form-control"
              id="inputAmphoe"
              value={amphoe}
              onChange={handleOnChange3}
            />
          </div>
          <div className="col-sm-1 width5">
            <label className="label mt-1">จังหวัด</label>
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              placeholder="ระบุจังหวัด"
              className="form-control"
              id="inputProvince"
              value={province}
              onChange={handleOnChange4}
            />
          </div>
          <div className="col-sm-1 width10">
            <label className="label mt-1">รหัสไปรษณีย์</label>
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              placeholder="ระบุรหัสไปรษณีย์"
              className="form-control"
              id="inputZipcode"
              value={zipcode}
              onInput={handleOnChange5}
            />
          </div>
        </div>

        {/* <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                3. ประเภทงาน (ความสามารถด้านงานก่อสร้าง หรืองานไฟฟ้า)
              </label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>เลือกประเภทงาน</option>
                <option value="1">ผู้รับเหมาก่อสร้าง</option>
                <option value="2">ผู้รับเหมาไฟฟ้า</option>
                <option value="3">ผู้รับเหมาเบลลินี่</option>
                <option value="4">ผู้รับเหมางานซ่อมปรับปรุง</option>
                <option value="5">ผู้รับเหมาทำความสะอาด</option>
                <option value="6">อื่นๆ</option>
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
              <input
                type="text"
                placeholder="ระบุตัวอย่าง"
                className="form-control"
                id="inputGWork"
              />
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
            <input
              type="text"
              placeholder="ระบุตัวอย่าง"
              className="form-control"
              id="inputBWork"
            />
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                6. ผลงานที่โดดเด่นมีอะไรบ้าง
              </label>
              <textarea
                className="form-control"
                placeholder="ระบุผลงาน"
                rows="4"
                id="inputPWork"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto g-3 top-row">
          <label className="label">7. มีพนักงานประจำทั้งหมดที่คน</label>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-0"></div>
          <div className="col-md-1">
            <label className="label">แบ่งเป็น</label>
          </div>
          <div className="col-md-1-mr-2">
            <div className="field">
              <label className="label mbc">
                วิศวกรโยธา
              </label>
              <br />
              <label className="label mbc">
                วิศวกรไฟฟ้า
              </label>
              <br />
              <label className="label mbc">
                โฟร์แมน
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                แรงงาน
              </label>
            </div>
          </div>

          <div className="col">
            <div className="field">
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCivil"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputElec"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputFore"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic3"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputWorker"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-0"></div>
          <div className="col-ml-5">
            <div className="field">
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
            </div>
          </div>
          <div className="col">
            <div className="field">
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic3"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col">
            <label className="label">
              8. มีพนักงานชั่วคราวทั้งหมดที่คน (OUTSOURCE)
            </label>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-0"></div>
          <div className="col-md-1">
            <label className="label">แบ่งเป็น</label>
          </div>
          <div className="col-md-1-mr-2">
            <div className="field">
              <label className="label mbc">
                วิศวกรโยธา
              </label>
              <br />
              <label className="label mbc">
                วิศวกรไฟฟ้า
              </label>
              <br />
              <label className="label mbc">
                โฟร์แมน
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                หัวหน้าช่าง
              </label>
              <br />
              <label className="label mbc">
                แรงงาน
              </label>
            </div>
          </div>

          <div className="col">
            <div className="field">
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCivilTemp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputElecTemp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputForeTemp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic1Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic2Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputCMechanic3Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputWorkerTemp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-0"></div>
          <div className="col-ml-5">
            <div className="field">
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
              <br />
              <label className="label mbc">
                ช่าง
              </label>
            </div>
          </div>
          <div className="col">
            <div className="field">
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="label mbc"></div>
              <br />
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic1Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic2Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputMechanic3Temp"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    คน
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-auto g-3 top-row">
          <div className="col-md-6">
            <div className="field">
              <label className="label">
                9. เครื่องมือ/เครื่องจักร ที่มีอะไรบ้าง (เครื่องมือหนัก+ใหญ่)
              </label>
              <textarea
                className="form-control"
                placeholder="ระบุเครื่องมือ"
                rows="4"
                id="inputTools"
              ></textarea>
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
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  placeholder="ระบุจำนวน"
                  id="inputBranch"
                />
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
              <input
                type="text"
                placeholder="ระบุจังหวัด"
                className="form-control"
                id="inputGWork"
              />
            </div>
          </div>
        </div> */}
        <div className="row row-cols-auto g-3 top-row">
          <button
            id="Subbtn"
            className="btn btn-primary"
            onClick={() => {
              return InsertData();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
