import React from "react";

class Electorate extends React.Component {
  /*
   * Get a string containing the CSS classes (aside from 'electorate') that this
   * component should have. This is primarily used to determine the colour of the
   * electorate.   
   */
  getElectorateClasses() {
    let classes = "";
    const delimiter = " ";

    // The square should be blank if it does not contain an electorate
    if (this.props.name === "none") {
      classes += "electorate-none" + delimiter;
    }

    return classes;
  }

  render() {
    return (
      <div className={"electorate " + this.getElectorateClasses()}></div>
    );
  } 
}

export default Electorate;
