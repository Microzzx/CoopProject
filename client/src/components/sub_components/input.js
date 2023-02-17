import React from "react";

function Input(props) {
  const { name, id, type, value, min, placeholder, setFunc, invalid } = props;

  return (
    <>
      <input
        name={name}
        className="form-control"
        id={id}
        type={type}
        value={value}
        min={min}
        placeholder={placeholder}
        onChange={setFunc}
        required
      />
      {invalid ? <div className="invalid-feedback">{invalid}</div> : null}
    </>
  );
}

export default Input;
