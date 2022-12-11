import React, { useState } from "react";
import "../css/form.css";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import AutoAddress from "./autoaddress";

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

// Firebase Data
  function InsertData() {
    const db = getDatabase();
    push(ref(db, "Company/"), {
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
                onChange={(e) => {
                  setComName(e.target.value);
                }}
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
                  onChange={(e) => {
                    setComAge(e.target.value);                    
                  }}
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
              <select className="form-select" aria-label="Default select example" onChange={(e) => {setWorktype(e.target.value);}}>
                <option defaultValue>เลือกประเภทงาน</option>
                <option value="ผู้รับเหมาก่อสร้าง">ผู้รับเหมาก่อสร้าง</option>
                <option value="ผู้รับเหมาไฟฟ้า">ผู้รับเหมาไฟฟ้า</option>
                <option value="ผู้รับเหมาเบลลินี่">ผู้รับเหมาเบลลินี่</option>
                <option value="ผู้รับเหมางานซ่อมปรับปรุง">ผู้รับเหมางานซ่อมปรับปรุง</option>
                <option value="ผู้รับเหมาทำความสะอาด">ผู้รับเหมาทำความสะอาด</option>
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
              <input
                type="text"
                placeholder="ระบุตัวอย่าง"
                className="form-control"
                id="toughness"
                onChange={(e) => {
                  setToughness(e.target.value);                    
                }}
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
              id="weakness"
              onChange={(e) => {
                setWeakness(e.target.value);                    
              }}
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
                id="exwork"
                onChange={(e) => {
                  setExwork(e.target.value);                    
                }}
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
                  onChange={(e) => {
                    setCivil(e.target.value);                    
                  }}
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
                  id="inputElectrical"
                  onChange={(e) => {
                    setElectrical(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setFore(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setChief1(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setChief2(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setChief3(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setWorker(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setMechanic1(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setMechanic2(e.target.value);                    
                  }}
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
                  onChange={(e) => {
                    setMechanic3(e.target.value);                    
                  }}
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
        </div>
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
