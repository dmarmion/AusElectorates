import React from "react";

function Electorate(props) {
  return (
    <div className="electorate">
      <p>{`(${props.row}, ${props.col})`}</p>
    </div>
  );
}

export default Electorate;
