import React, { useState } from "react";
import "../css/formA2.css";
import Input from "./sub_components/input";
import Axios from "axios";

function FormA2() {
  const [image, setImage] = useState(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setImage(reader.result);
  };
};
  
  const PostA2 = (e) =>{
    e.preventDefault()
    console.log(image)
    const token = localStorage.getItem("token");
    Axios.post("http://localhost:3001/a2_image_input", {image: image}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.status === "error") {
          alert("Error: " + response.data.message);
        } else {
        alert("Data Inserted!");
        window.location = '/document'
        }
      })
      .catch((error) => {
        alert("Error: " + error);
        console.log(error);
      });
  }
  
  return (
    <form className="row row-cols-auto g-3 top-row" onSubmit={PostA2}>
           <label className="label">
             1. หนังสือรับรอง (อายุไม่เกิน 3 เดือน)
           </label>
           <input className="form-control" type="file" name="image1" onChange={handleImageChange} />
           {image && <img src={image} alt="Selected Image" />}
           <button type="submit" className="btn btn-primary">
             Submit
           </button>
    </form>

    // <div className="container mt-3 mb-5">
    //   <form className="row row-cols-auto g-3 top-row" onSubmit={PostA2}>
    //     <h2 className="center mtc mbc">
    //       คุณสมบัติเบื้องต้นของผู้รับเหมาเพื่อพิจารณาเข้าร่วมโครงการฯ
    //     </h2>
    //     <div className="col-md-12 mb-2">
    //       <h5 className="label">ข้อมูลทั่วไป</h5>
    //     </div>
    //     <div className="col-md-4 ">
    //       <label className="label">ประเภทของผู้รับเหมา</label>
    //       <select
    //         className="form-select"
    //         aria-label="Default select example"
    //         onChange={(e) => {}}
    //       >
    //         <option value="">กรุณาเลือกประเภท</option>
    //         <option value="ห้างหุ้นส่วนจำกัด">ห้างหุ้นส่วนจำกัด</option>
    //         <option value="บริษัทจำกัด">บริษัทจำกัด</option>
    //       </select>
    //     </div>
    //     <div className="col-md-8">
    //       <label className="form-label">
    //         ชื่อสถานประกอบการ
    //       </label>
    //       <Input
    //         id={"inputComArea"}
    //         value={state.comname}
    //         type={"text"}
    //         placeholder={"ระบุสถานประกอบการ"}
    //         setFunc={(e) => {}}
    //       ></Input>
    //     </div>
    //     <div className="col-md-4">
    //       <div className="field">
    //         <label className="label">ประเภทของการรับงาน</label>
    //         <select
    //           className="form-select"
    //           aria-label="Default select example"
    //           onChange={(e) => {}}
    //         >
    //           <option value="">กรุณาเลือกประเภทงาน</option>
    //           <option value="งานก่อสร้าง">งานก่อสร้าง</option>
    //           <option value="งานตกแต่ง/สถาปัตย์">งานตกแต่ง/สถาปัตย์</option>
    //           <option value="งานระบบ(ไฟฟ้า)">งานระบบ(ไฟฟ้า)</option>
    //         </select>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <label className="form-label">
    //         ชื่อผู้สมัคร
    //       </label>
    //       <Input
    //         id={"inputComArea"}
    //         value={state.name}
    //         type={"text"}
    //         placeholder={"ระบุชื่อ"}
    //         setFunc={(e) => {}}
    //       ></Input>
    //     </div>
    //     <div className="col-md-4">
    //       <label className="form-label">
    //         เบอร์โทรศัพท์
    //       </label>
    //       <Input
    //         id={"inputComArea"}
    //         value={state.phonenum}
    //         type={"text"}
    //         placeholder={"ระบุเบอร์โทรศัพท์"}
    //         setFunc={(e) => {}}
    //       ></Input>
    //     </div>
    //     <div className="col-md-12 mt-5 mb-2">
    //       <h5 className="label">ข้อมูลผู้สมัครเข้าร่วมโครงการ</h5>
    //     </div>
    //     <div className="col-md-6">
    //       <label className="label">
    //         1. หนังสือรับรอง (อายุไม่เกิน 3 เดือน)
    //       </label>
    //       <input className="form-control" type="file" name="image1" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         2. ภพ.20 (หนังสือจดทะเบียนภาษีมูลค่าเพิ่ม)
    //       </label>
    //       <input className="form-control" type="file" name="image2" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         3. บัญชีรายชื่อผู้ถือหุ้น บมจ.006 หรือ บอจ.5 (ยกเว้น หจก.)
    //       </label>
    //       <input className="form-control" type="file" name="image3" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-10">
    //       <label className="label">
    //         4. หลักฐานอื่น เช่น หลักฐานการเปลี่ยนชื่อ/สกุล (ถ้ามี),
    //         หนังสือมอบอำนาจ (กรณีกรรมการผู้มีอำนาจไม่ได้ลงนามเอง){" "}
    //       </label>
    //       <input className="form-control" type="file" name="image4" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-2" />
    //     <div className="col-md-6">
    //       <label className="label">5. หนังสือรักษาความลับ</label>
    //       <input className="form-control" type="file" name="image5" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-12 mt-5 mb-2">
    //       <h5 className="label">ข้อมูลทางด้านการเงินของผู้สมัคร</h5>
    //     </div>
    //     <div className="col-md-6">
    //       <label className="label">6. งบการเงิน 2 ปีล่าสุด</label>
    //       <input className="form-control" type="file" name="image6" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         7. Statement เงินฝากธนาคาร 6 เดือนย้อนหลัง
    //       </label>
    //       <input className="form-control" type="file" name="image7" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-12 mt-5 mb-2">
    //       <h5 className="label">ข้อมูลทางด้านการบริหารองค์กร</h5>
    //     </div>
    //     <div className="col-md-6">
    //       <label className="label">8. แผนที่ต้งพร้อมภาพถ่ายสถานประกอบการ</label>
    //       <input className="form-control" type="file" name="image8" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">9. แผนผังโครงสร้างองค์กร</label>
    //       <input className="form-control" type="file" name="image9" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">10. จำนวนวิศวกร หรือวิศวกรที่ปรึกษา</label>
    //       <input className="form-control" type="file" name="image10" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         11. จำนวน และรายชื่อผู้ควบคุมงาน (Foreman)
    //       </label>
    //       <input className="form-control" type="file" name="image11" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">12. จำนวนชุดช่างแรงงาน (Labour)</label>
    //       <input className="form-control" type="file" name="image12" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         13. รายชื่อผู้รับเหมาช่วงงานเฉพาะทาง เช่น ผู้รับเหมาช่วงงานกระจก
    //         งานเหล็ก
    //       </label>
    //       <input className="form-control" type="file" name="image13" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-7">
    //       <label className="label">
    //         14.
    //         รายชื่อร้านค้าที่ผู้รับเหมาสั่งซื้อวัสดุก่อสร้างเป็นประจำพร้อมระบุเงื่อนไขการซื้อ
    //         เช่น เครดิต เงินสด
    //       </label>
    //       <input className="form-control" type="file" name="image14" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-5" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         15. Project Reference ข้อมูลผลงานก่อสร้างในอดีต
    //         (รูปถ่าย/มูลค่างาน/ระยะเวลาการก่อสร้าง)
    //       </label>
    //       <input className="form-control" type="file" name="image15" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         16. ชนิด และจำนวนเครื่องมือ/เครื่องจักร ในการทำงาน
    //       </label>
    //       <input className="form-control" type="file" name="image16" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         17. นโยบายด้านความปลอดภัยเบื้องต้น (คนงานจะต้องสวมใส่ชุดของบริษัท,
    //         ใส่หมวกแข็ง (Helmet) ใส่รองเท้าหุ้มส้น, ใช้ Safety Belt
    //         ในกรณีทำงานในที่สูง)
    //       </label>
    //       <input className="form-control" type="file" name="image17" onChange={handleChange} />
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-6">
    //       <label className="label">
    //         18. กรุณาระบุพื้นที่ที่สะดวกในการดำเนินงานก่อสร้าง (เช่น
    //         ระบุเป็นจังหวัด หรือภาคที่สะดวกในกรดำเนินงาน)
    //       </label>
    //       <Input
    //         id={"inputComArea"}
    //         value={state.workarea}
    //         type={"text"}
    //         placeholder={"ระบุพื้นที่"}
    //         setFunc={(e) => {}}
    //       ></Input>
    //     </div>
    //     <div className="col-md-6" />
    //     <div className="col-md-12 mt-4">
    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default FormA2;
