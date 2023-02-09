import InputAddress from "react-thailand-address-autocomplete";
import React from "react";

function Address(props) {
  const {state, setState, onSelect} = props;

  return (
      <div className="form-group row row-cols-auto g-3 top-row">
      <div className="md-0"></div>
      <div className="col-sm-1 width5">
        <label className="label mt-1">ตำบล</label>
      </div>
      <div className="col-sm-2">
        <InputAddress
          
          className="form-control"
          placeholder="แขวง / ตำบล"
          address="subdistrict"
          value={state.subdistrict}
          onChange={(e) => {
            setState({...state,subdistrict:e.target.value});
          }}
          onSelect={onSelect}
        />
      </div>
      <div className="col-sm-1 width5">
        <label className="label mt-1">อำเภอ</label>
      </div>
      <div className="col-sm-2 ">
        <InputAddress
          
          placeholder="เขต / อำเภอ"
          address="district"
          value={state.district}
          onChange={(e) => {
            setState({...state,district:e.target.value});
          }}
          onSelect={onSelect}
        />
      </div>
      <div className="col-sm-1 width5">
        <label className="label mt-1">จังหวัด</label>
      </div>
      <div className="col-sm-2">
        <InputAddress
          
          placeholder="จังหวัด"
          address="province"
          value={state.province}
          onChange={(e) => {
            setState({...state,province:e.target.value});
          }}
          onSelect={onSelect}
        />
      </div>
      <div className="col-sm-1 width10">
        <label className="label mt-1">รหัสไปรษณีย์</label>
      </div>
      <div className="col-sm-2">
        <InputAddress
          
          placeholder="เลขไปรษณีย์"
          address="zipcode"
          value={state.zipcode}
          onChange={(e) => {
            setState({...state,zipcode:e.target.value});
          }}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default Address;
