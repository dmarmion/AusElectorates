import React from "react";
import getPartyClassMap from "../utils";

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
    } else {
      let partyClass = getPartyClassMap().get(this.props.party);

      if (partyClass === undefined) {
        partyClass = "";
      }

      classes += partyClass + delimiter;
    }

    return classes.trimEnd();
  }

  render() {
    return (
      <div className={"electorate " + this.getElectorateClasses()}></div>
    );
  } 
}

export default Electorate;
