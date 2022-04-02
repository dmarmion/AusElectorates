import React from "react";
import { getPartyClassMap } from "../utils";

const Electorate = ({ name, party, onSelectionChange }) => {
  /*
   * Get a string containing the CSS classes (aside from 'electorate') that this
   * component should have. This is primarily used to determine the colour of the
   * electorate.   
   */
  const getElectorateClasses = () => {
    let classes = "";
    const delimiter = " ";

    // The square should be blank if it does not contain an electorate
    if (name === "none") {
      classes += "electorate-none" + delimiter;
    } else {
      let partyClass = getPartyClassMap().get(party);

      if (partyClass === undefined) {
        partyClass = "";
      }

      classes += partyClass + delimiter;
    }

    return classes.trimEnd();
  }

  return (
    <div
      className={"electorate " + getElectorateClasses()}
      onMouseEnter={() => onSelectionChange(name)}
      onMouseLeave={() => onSelectionChange("none")}
    >
    </div>
  );
}

export default Electorate;
