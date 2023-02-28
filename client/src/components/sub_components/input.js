import React from "react";

function Input(props) {
  const { name, id, type, value, min, placeholder, setFunc, invalid, accept } =
    props;

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
        accept={accept}
        required
      />
      {invalid ? <div className="invalid-feedback">{invalid}</div> : null}
    </>
  );
}

export default Input;
