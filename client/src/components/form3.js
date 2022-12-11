import { useState } from "react";
import AddressForm from "./AddressForm";
import { getDatabase, ref, push } from "firebase/database";

export default function App() {
  //Checkout page functionality
  const [error, setError] = useState("");
  
  // const onNext = (e) => {
  //   e.preventDefault();
  //   console.log(subdistrict, district, province, zipcode);

  //   if (!subdistrict || !district || !province || !zipcode) {
  //     setError("กรอกข้อมูลไม่ครบ");
  //     console.log(error)
  //     return;
  //   }
   
  // };

  //AddressForm state
  const [subdistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [fullAddress, setFullAddress] = useState({});

  function onSelect(fulladdress) {
    const { subdistrict, district, province, zipcode } = fulladdress;
    setSubDistrict(subdistrict);
    setDistrict(district);
    setProvince(province);
    setZipcode(zipcode);
    setFullAddress([subdistrict, district, province, zipcode]);
    setError("");
    console.log("some fulladdress: ", fullAddress);
  }
  //end AddressForm
  //firebase 
  function InsertData() {
    const db = getDatabase();
    push(ref(db, "Address/"), {
      Subdistrict: subdistrict,
      District: district,
      Province: province,
      Zipcode: zipcode,
    })
      .then(() => {
        alert("data stored");
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
        console.log(error);
      });
  }
  
  return (
    <div className="App">
            <AddressForm
              setError={setError}
              subdistrict={subdistrict}
              setSubDistrict={setSubDistrict}
              district={district}
              setDistrict={setDistrict}
              province={province}
              setProvince={setProvince}
              zipcode={zipcode}
              setZipcode={setZipcode}
              fullAddress={fullAddress}
              setFullAddress={setFullAddress}
              onSelect={onSelect}
            />
          <button
            className="btn btn-primary"
            onClick={InsertData}
          >
            ยืนยัน
          </button>
    </div>
  );
}