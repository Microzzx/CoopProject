import React, { useState } from "react";
import "../css/form.css";
import Input from "./sub_components/input";
import Axios from "axios";

function FormA2() {
  const [state, setState] = useState({
    comname: "",
    comtype: "",
    worktype: "",
    name: "",
    phone: "",
    pdf1: "",
    pdf2: "",
    pdf3: "",
    pdf4: "",
    pdf5: "",
    pdf6: "",
    pdf7: "",
    pdf8: "",
    pdf9: "",
    pdf10: "",
    pdf11: "",
    pdf12: "",
    pdf13: "",
    pdf14: "",
    pdf15: "",
    pdf16: "",
    pdf17: "",
    workarea: "",
  });

  const handlePDFChange = (event, num) => {
    const file = event.target.files[0];
    setState({ ...state, [`pdf${num}`]: file });
  };

  const postA2 = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("comname", state.comname);
    formData.append("comtype", state.comtype);
    formData.append("worktype", state.worktype);
    formData.append("name", state.name);
    formData.append("phone", state.phone);
    formData.append("pdf1", state.pdf1);
    formData.append("pdf2", state.pdf2);
    formData.append("pdf3", state.pdf3);
    formData.append("pdf4", state.pdf4);
    formData.append("pdf5", state.pdf5);
    formData.append("pdf6", state.pdf6);
    formData.append("pdf7", state.pdf7);
    formData.append("pdf8", state.pdf8);
    formData.append("pdf9", state.pdf9);
    formData.append("pdf10", state.pdf10);
    formData.append("pdf11", state.pdf11);
    formData.append("pdf12", state.pdf12);
    formData.append("pdf13", state.pdf13);
    formData.append("pdf14", state.pdf14);
    formData.append("pdf15", state.pdf15);
    formData.append("pdf16", state.pdf16);
    formData.append("pdf17", state.pdf17);
    formData.append("workarea", state.workarea);
    Axios.post("http://localhost:3001/a2_input", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
          alert(response.data.message);
          window.location = "/document";
        }
      })
      .catch((error) => {
        alert("unsuccessful, " + error);
        console.log(error);
      });
  };

  const checkValidity = () => {
    for (let key of Object.keys(state)) {
      if (!Boolean(state[key])) {
        const form = document.querySelector("form");
        form.classList.add("was-validated"); // validated check
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidity()) {
      postA2();
    }
  };

  const printA2 = (e) => {
    e.preventDefault();
    Object.keys(state).forEach((key) => {
      console.log(`${key}: ${state[key]}`);
    });
  };

  return (
    <div className="container border shadow rcorners2 mt-5 mb-5">
      <form
        className="row row-cols-auto g-3 top-row needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-12 mb-2">
          <h2 className="center mtc mbc">
            คุณสมบัติเบื้องต้นของผู้รับเหมาเพื่อพิจารณาเข้าร่วมโครงการฯ
          </h2>
        </div>

        <div className="col-md-12 mb-2">
          <h5 className="label">ข้อมูลทั่วไป</h5>
        </div>
        <div className="col-md-4 ">
          <label className="label">ประเภทของผู้รับเหมา</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setState({ ...state, comtype: e.target.value })}
            required
          >
            <option value="">กรุณาเลือกประเภท</option>
            <option value="ห้างหุ้นส่วนจำกัด">ห้างหุ้นส่วนจำกัด</option>
            <option value="บริษัทจำกัด">บริษัทจำกัด</option>
          </select>
        </div>
        <div className="col-md-8">
          <label className="form-label">ชื่อสถานประกอบการ</label>
          <Input
            id={"inputComArea"}
            value={state.comname}
            type={"text"}
            placeholder={"ระบุสถานประกอบการ"}
            setFunc={(e) => setState({ ...state, comname: e.target.value })}
          ></Input>
        </div>
        <div className="col-md-4">
          <label className="label">ประเภทของการรับงาน</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setState({ ...state, worktype: e.target.value })}
            required
          >
            <option value="">กรุณาเลือกประเภทงาน</option>
            <option value="งานก่อสร้าง">งานก่อสร้าง</option>
            <option value="งานตกแต่ง/สถาปัตย์">งานตกแต่ง/สถาปัตย์</option>
            <option value="งานระบบ(ไฟฟ้า)">งานระบบ(ไฟฟ้า)</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">ชื่อผู้สมัคร</label>
          <Input
            id={"inputComArea"}
            value={state.name}
            type={"text"}
            placeholder={"ระบุชื่อ"}
            setFunc={(e) => setState({ ...state, name: e.target.value })}
          ></Input>
        </div>
        <div className="col-md-4">
          <label className="form-label">เบอร์โทรศัพท์</label>
          <Input
            id={"inputComArea"}
            value={state.phone}
            type={"text"}
            placeholder={"ระบุเบอร์โทรศัพท์"}
            setFunc={(e) => setState({ ...state, phone: e.target.value })}
          ></Input>
        </div>
        <div className="col-md-12 mt-5 mb-2">
          <h5 className="label">ข้อมูลผู้สมัครเข้าร่วมโครงการ</h5>
        </div>
        <div className="col-md-6">
          <label className="label">
            1. หนังสือรับรอง (อายุไม่เกิน 3 เดือน)
          </label>
          <Input
            name="pdf1"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 1)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            2. ภพ.20 (หนังสือจดทะเบียนภาษีมูลค่าเพิ่ม)
          </label>
          <Input
            name="pdf2"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 2)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            3. บัญชีรายชื่อผู้ถือหุ้น บมจ.006 หรือ บอจ.5 (ยกเว้น หจก.)
          </label>
          <Input
            name="pdf3"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 3)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12">
          <label className="label">
            4. หลักฐานอื่น เช่น หลักฐานการเปลี่ยนชื่อ/สกุล (ถ้ามี),
            หนังสือมอบอำนาจ (กรณีกรรมการผู้มีอำนาจไม่ได้ลงนามเอง){" "}
          </label>
        </div>
        <div className="col-md-6 mt-1">
          <Input
            name="pdf4"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 4)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">5. หนังสือรักษาความลับ</label>
          <Input
            name="pdf5"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 5)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12 mt-5 mb-2">
          <h5 className="label">ข้อมูลทางด้านการเงินของผู้สมัคร</h5>
        </div>
        <div className="col-md-6">
          <label className="label">6. งบการเงิน 2 ปีล่าสุด</label>
          <Input
            name="pdf6"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 6)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            7. Statement เงินฝากธนาคาร 6 เดือนย้อนหลัง
          </label>
          <Input
            name="pdf7"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 7)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12 mt-5 mb-2">
          <h5 className="label">ข้อมูลทางด้านการบริหารองค์กร</h5>
        </div>
        <div className="col-md-6">
          <label className="label">8. แผนที่ต้งพร้อมภาพถ่ายสถานประกอบการ</label>
          <Input
            name="pdf8"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 8)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">9. แผนผังโครงสร้างองค์กร</label>
          <Input
            name="pdf9"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 9)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">10. จำนวนวิศวกร หรือวิศวกรที่ปรึกษา</label>
          <Input
            name="pdf10"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 10)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            11. จำนวน และรายชื่อผู้ควบคุมงาน (Foreman)
          </label>
          <Input
            name="pdf11"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 11)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">12. จำนวนชุดช่างแรงงาน (Labour)</label>
          <Input
            name="pdf12"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 12)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            13. รายชื่อผู้รับเหมาช่วงงานเฉพาะทาง เช่น ผู้รับเหมาช่วงงานกระจก
            งานเหล็ก
          </label>
          <Input
            name="pdf13"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 13)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12">
          <label className="label">
            14.
            รายชื่อร้านค้าที่ผู้รับเหมาสั่งซื้อวัสดุก่อสร้างเป็นประจำพร้อมระบุเงื่อนไขการซื้อ
            เช่น เครดิต เงินสด
          </label>
        </div>
        <div className="col-md-6 mt-1">
          <Input
            name="pdf14"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 14)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12">
          <label className="label">
            15. Project Reference ข้อมูลผลงานก่อสร้างในอดีต
            (รูปถ่าย/มูลค่างาน/ระยะเวลาการก่อสร้าง)
          </label>
        </div>
        <div className="col-md-6 mt-1">
          <Input
            name="pdf15"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 15)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-6">
          <label className="label">
            16. ชนิด และจำนวนเครื่องมือ/เครื่องจักร ในการทำงาน
          </label>
          <Input
            name="pdf16"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 16)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12">
          <label className="label">
            17. นโยบายด้านความปลอดภัยเบื้องต้น (คนงานจะต้องสวมใส่ชุดของบริษัท,
            ใส่หมวกแข็ง (Helmet) ใส่รองเท้าหุ้มส้น, ใช้ Safety Belt
            ในกรณีทำงานในที่สูง)
          </label>
        </div>
        <div className="col-md-6 mt-1">
          <Input
            name="pdf17"
            type={"file"}
            setFunc={(e) => handlePDFChange(e, 17)}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12">
          <label className="label">
            18. กรุณาระบุพื้นที่ที่สะดวกในการดำเนินงานก่อสร้าง (เช่น
            ระบุเป็นจังหวัด หรือภาคที่สะดวกในการดำเนินงาน)
          </label>
        </div>
        <div className="col-md-6 mt-1">
          <Input
            value={state.workarea}
            type={"text"}
            placeholder={"ระบุพื้นที่"}
            setFunc={(e) => setState({ ...state, workarea: e.target.value })}
          ></Input>
        </div>
        <div className="col-md-6" />
        <div className="col-md-12 mt-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormA2;
