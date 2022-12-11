import InputAddress from "react-thailand-address-autocomplete";

function Address(props) {
  const {
    subdistrict,
    setSubDistrict,
    district,
    setDistrict,
    province,
    setProvince,
    zipcode,
    setZipcode,
    onSelect,
    setError
  } = props;

  return (
    <div className="address flex flex-col space-y-1">
      <div className="flex justify-center focus:outline-none">
        <InputAddress
          style={{ width: "100%", outlineStyle: "none" }}
          placeholder="แขวง / ตำบล"
          address="subdistrict"
          value={subdistrict}
          onChange={(e) => {
            setSubDistrict(e.target.value);
            setError("");
          }}
          onSelect={onSelect}
        />

        <InputAddress
          style={{ width: "100%", outlineStyle: "none" }}
          placeholder="เขต / อำเภอ"
          address="district"
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            setError("");
          }}
          onSelect={onSelect}
        />
      </div>
      <div className="flex justify-center">
        <InputAddress
          style={{ width: "100%", outlineStyle: "none" }}
          placeholder="จังหวัด"
          address="province"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setError("");
          }}
          onSelect={onSelect}
        />

        <InputAddress
          style={{ width: "100%", outlineStyle: "none" }}
          placeholder="เลขไปรษณีย์"
          address="zipcode"
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value);
            setError("");
          }}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default Address;
