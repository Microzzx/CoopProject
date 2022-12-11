import Address from "./autocomplete";

export default function AddressForm(props) {
  const {
    setError,
    subdistrict,
    setSubDistrict,
    district,
    setDistrict,
    province,
    setProvince,
    zipcode,
    setZipcode,
    fullAddress,
    setFullAddress,
    onSelect,
  } = props;

  return (
    <div>
      <Address
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
    </div>
  );
}