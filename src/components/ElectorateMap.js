import React, { useState } from "react";

import DataSelector from "./DataSelector";
import Electorate from "./Electorate";

const ElectorateMap = () => {
  // By default, use the current state of federal parliament
  const [locations, setLocations] = useState(require("../data/federal/locations2022.json"));
  const [parties, setParties] = useState(require("../data/federal/parties2022.json"));
  const [currentElectorate, setCurrentElectorate] = useState(null);

  const handleCartogramDataChange = (locations, parties) => {
    setLocations(locations);
    setParties(parties);
  };

  const handleElectorateChange = (electorate) => {
    setCurrentElectorate(electorate);
  };

  const locationKey = (col, row) => `${col},${row}`;

  const getCornerStyles = (col, row) => {
    const RADIUS = "30%";
    let styles = {};

    const seatExistsToLeft = !!locations[locationKey(col - 1, row)];
    const seatExistsAbove = !!locations[locationKey(col, row - 1)];
    const seatExistsToRight = !!locations[locationKey(col + 1, row)];
    const seatExistsBelow = !!locations[locationKey(col, row + 1)];

    if (!seatExistsToLeft && !seatExistsAbove) styles["borderTopLeftRadius"] = RADIUS;
    if (!seatExistsAbove && !seatExistsToRight) styles["borderTopRightRadius"] = RADIUS;
    if (!seatExistsToRight && !seatExistsBelow) styles["borderBottomRightRadius"] = RADIUS;
    if (!seatExistsBelow && !seatExistsToLeft) styles["borderBottomLeftRadius"] = RADIUS;

    return styles;
  };

  // Render the grid of electorates
  const renderElectorates = () => {
    // Helper function to generate the rows of the table
    const renderGridRows = () => {
      let rows = [];
      for (let row = 0; row < locations.rows; row++) {
        rows.push(<tr key={row}>{renderGridColumns(row)}</tr>);
      }
      return rows;
    };

    // Helper function to generate the columns in each row
    const renderGridColumns = (row) => {
      let cols = [];
      for (let col = 0; col < locations.columns; col++) {
        let seatName = locations[locationKey(col, row)];
        let party = seatName ? parties[seatName] : "";

        cols.push(
          <td key={`${row}-${col}`}>
            <Electorate
              name={seatName}
              party={party}
              onSelectionChange={handleElectorateChange}
              cornerStyles={getCornerStyles(col, row)}
            />
          </td>
        );
      }
      return cols;
    };

    return (
      <table className="electorate-map">
        <tbody>{renderGridRows()}</tbody>
      </table>
    );
  };

  return (
    <div className="row">
      <div className="col-md-9">
        {renderElectorates()}
        <h4>
          Currently selected:{" "}
          {currentElectorate ? `${currentElectorate} (${parties[currentElectorate]})` : ""}
        </h4>
      </div>
      <div className="col-md-3">
        <DataSelector updateMapData={handleCartogramDataChange} />
      </div>
    </div>
  );
};

export default ElectorateMap;
