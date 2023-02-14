import React from "react";

function Textarea(props) {
  const { id, value, string, row, setFunc } = props;

  return (
    <textarea
      className="form-control"
      placeholder={string}
      rows={row}
      id={id}
      value={value} 
      onChange={setFunc}
    ></textarea>
  );
}

export default Textarea;
