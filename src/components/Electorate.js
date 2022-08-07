import React from "react";

import { NO_PARTY_COLOUR, PARTY_COLOURS } from "../constants";

const Electorate = ({ name, party, onSelectionChange }) => {
  const partyColour = party ? PARTY_COLOURS.get(party) : NO_PARTY_COLOUR;
  return (
    <div
      className="electorate"
      onMouseEnter={() => onSelectionChange(name)}
      onMouseLeave={() => onSelectionChange(null)}
      style={{backgroundColor: partyColour}}
    >
    </div>
  );
}

export default Electorate;
