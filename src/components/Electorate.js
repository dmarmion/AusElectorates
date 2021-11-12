import React from "react";

class Electorate extends React.Component {
  render() {
    return (
      <div className="electorate">
        <p>{this.props.name === "none" ? "." : this.props.name}</p>
      </div>
    );
  } 
}

export default Electorate;
