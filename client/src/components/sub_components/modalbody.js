import React from "react";
import "../../css/datapage.css";
function Mdbody(props) {
  const {
    name,
    age,
    subdistrict,
    district,
    province,
    zipcode,
    worktype,
    toughness,
    weakness,
    exwork,
    civil,
    electrical,
    fore,
    chief1,
    chief2,
    chief3,
    mechanic1,
    mechanic2,
    mechanic3,
    worker,
    ocivil,
    oelectrical,
    ofore,
    ochief1,
    ochief2,
    ochief3,
    omechanic1,
    omechanic2,
    omechanic3,
    oworker,
    tools,
    branch,
    provinces,
  } = props;
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">ชื่อบริษัท :</div>
        <div className="col-sm-3">{name}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">อายุบริษัท :</div>
        <div className="col-sm-3">{age} ปี</div>
      </div>
      <div className="row">
        <div className="col-sm-3">ที่อยู่ :</div>
        <div className="col-sm-6">
          ต.{subdistrict} อ.{district} จ.{province} {zipcode}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">ประเภทงาน :</div>
        <div className="col-sm-3">{worktype}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">งานที่ถนัด :</div>
        <div className="col-sm-3">{toughness}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">งานที่ไม่ถนัด :</div>
        <div className="col-sm-3">{weakness}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">ผลงานที่โดดเด่น :</div>
        <div className="col-sm-3">{exwork}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">เครื่องมือ :</div>
        <div className="col-sm-3">{tools}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">สาขาที่จะรับงาน :</div>
        <div className="col-sm-3">{branch}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">จังหวัดที่สามารถรับงานได้ :</div>
        <div className="col-sm-3">{provinces}</div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-3">
          ---พนักงานประจำ---
          <br />
          <div className="row">
            <div className="col-sm-7">วิศวกรโยธา :</div>
            <div className="col-sm-3">{civil} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">วิศวกรไฟฟ้า :</div>
            <div className="col-sm-3">{electrical} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">โฟร์แมน :</div>
            <div className="col-sm-3">{fore} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง1 :</div>
            <div className="col-sm-3">{chief1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง2 :</div>
            <div className="col-sm-3">{chief2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง3 :</div>
            <div className="col-sm-3">{chief3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง1 :</div>
            <div className="col-sm-3">{mechanic1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง2 :</div>
            <div className="col-sm-3">{mechanic2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง3 :</div>
            <div className="col-sm-3">{mechanic3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">แรงงาน :</div>
            <div className="col-sm-3">{worker} คน</div>
          </div>
        </div>
        <div className="col-sm-3">
          ---พนักงานชั่วคราว---
          <br />
          <div className="row">
            <div className="col-sm-7">วิศวกรโยธา :</div>
            <div className="col-sm-3">{ocivil} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">วิศวกรไฟฟ้า :</div>
            <div className="col-sm-3">{oelectrical} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">โฟร์แมน :</div>
            <div className="col-sm-3">{ofore} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง1 :</div>
            <div className="col-sm-3">{ochief1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง2 :</div>
            <div className="col-sm-3">{ochief2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง3 :</div>
            <div className="col-sm-3">{ochief3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง1 :</div>
            <div className="col-sm-3">{omechanic1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง2 :</div>
            <div className="col-sm-3">{omechanic2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง3 :</div>
            <div className="col-sm-3">{omechanic3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">แรงงาน :</div>
            <div className="col-sm-3">{oworker} คน</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mdbody;
