import React, { useState } from "react";
import "../../css/datapage.css";

function Mdbody(props) {
  const { modalinfo } = props;

  return (
    <div>
      <div className="row">
        <div className="col-sm-3">ชื่อบริษัท :</div>
        <div className="col-sm-4">{modalinfo.name}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">อายุบริษัท :</div>
        <div className="col-sm-3">{modalinfo.age} ปี</div>
      </div>
      <div className="row">
        <div className="col-sm-3">ที่อยู่ :</div>
        <div className="col-sm-6">
          ต.{modalinfo.subdistrict} อ.{modalinfo.district} จ.
          {modalinfo.province} {modalinfo.zipcode}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">ประเภทงาน :</div>
        <div className="col-sm-3">{modalinfo.worktype}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">งานที่ถนัด :</div>
        <div className="col-sm-3">{modalinfo.toughness}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">งานที่ไม่ถนัด :</div>
        <div className="col-sm-3">{modalinfo.weakness}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">ผลงานที่โดดเด่น :</div>
        <div className="col-sm-3">{modalinfo.exwork}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">เครื่องมือ :</div>
        <div className="col-sm-3">{modalinfo.tools}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">สาขาที่จะรับงาน :</div>
        <div className="col-sm-3">{modalinfo.branch}</div>
      </div>
      <div className="row">
        <div className="col-sm-3">จังหวัดที่สามารถรับงานได้ :</div>
        <div className="col-sm-3">{modalinfo.provinces}</div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-3">
          ---พนักงานประจำ---
          <br />
          <div className="row">
            <div className="col-sm-7">วิศวกรโยธา :</div>
            <div className="col-sm-3">{modalinfo.civil} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">วิศวกรไฟฟ้า :</div>
            <div className="col-sm-3">{modalinfo.electrical} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">โฟร์แมน :</div>
            <div className="col-sm-3">{modalinfo.fore} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง1 :</div>
            <div className="col-sm-3">{modalinfo.chief1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง2 :</div>
            <div className="col-sm-3">{modalinfo.chief2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง3 :</div>
            <div className="col-sm-3">{modalinfo.chief3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง1 :</div>
            <div className="col-sm-3">{modalinfo.mechanic1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง2 :</div>
            <div className="col-sm-3">{modalinfo.mechanic2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง3 :</div>
            <div className="col-sm-3">{modalinfo.mechanic3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">แรงงาน :</div>
            <div className="col-sm-3">{modalinfo.worker} คน</div>
          </div>
        </div>
        <div className="col-sm-3">
          ---พนักงานชั่วคราว---
          <br />
          <div className="row">
            <div className="col-sm-7">วิศวกรโยธา :</div>
            <div className="col-sm-3">{modalinfo.ocivil} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">วิศวกรไฟฟ้า :</div>
            <div className="col-sm-3">{modalinfo.oelectrical} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">โฟร์แมน :</div>
            <div className="col-sm-3">{modalinfo.ofore} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง1 :</div>
            <div className="col-sm-3">{modalinfo.ochief1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง2 :</div>
            <div className="col-sm-3">{modalinfo.ochief2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">หัวหน้าช่าง3 :</div>
            <div className="col-sm-3">{modalinfo.ochief3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง1 :</div>
            <div className="col-sm-3">{modalinfo.omechanic1} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง2 :</div>
            <div className="col-sm-3">{modalinfo.omechanic2} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">ช่าง3 :</div>
            <div className="col-sm-3">{modalinfo.omechanic3} คน</div>
          </div>
          <div className="row">
            <div className="col-sm-7">แรงงาน :</div>
            <div className="col-sm-3">{modalinfo.oworker} คน</div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-2">เวลาที่ส่ง :</div>
        <div className="col-sm-4">{modalinfo.time}</div>
      </div>
      <div className="row">
        <div className="col-sm-2">อีเมลล์ :</div>
        <div className="col-sm-4">{modalinfo.email}</div>
      </div>
      <div className="row">
        <div className="col-sm-2">ตำแหน่งงาน :</div>
        <div className="col-sm-4">{modalinfo.workrole}</div>
      </div>
      <div className="row">
        <div className="col-sm-2">Comment :</div>
        <div className="col-sm-4">{modalinfo.comment}</div>
      </div>
      <div className="row">
        <div className="col-sm-2">สถานะ :</div>
        <div className="col-sm-4">{modalinfo.status}</div>
      </div>
    </div>
  );
}

export default Mdbody;
