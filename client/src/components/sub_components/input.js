import React from "react";

function Input(props) {
  const { id, value, type, min, placeholder, setFunc } = props;

  return (
    <input
      
      type={type}
      min={min}
      className="form-control"
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={setFunc}
    />
  );
}

export default Input;
