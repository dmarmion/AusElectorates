import React, { useState } from "react";

import DataSelector from "./DataSelector";
import Electorate from "./Electorate";

const ElectorateMap = () => {
  // By default, use the current state of federal parliament
  const [locations, setLocations] = useState(require("../data/locations2019.json"));
  const [parties, setParties] = useState(require("../data/partiespre2022.json"));
  const [currentElectorate, setCurrentElectorate] = useState("none");

  // Render the grid of electorates
  const renderElectorates = () => {    
    // Helper function to generate the rows of the table
    const renderGridRows = () => {
      let rows = [];
      for (let row = 0; row < locations.rows; row++) {
        rows.push(
          <tr key={row}>
            {renderGridColumns(row)}
          </tr>
        )
      }
      return rows;
    };

    // Helper function to generate the columns in each row
    const renderGridColumns = (row) => {
      let cols = [];
      for (let col = 0; col < locations.columns; col++) {
        let seatName = locations[`${col},${row}`];
        let party = (seatName === "none" ? "" : parties[seatName]);

        cols.push(
          <td key={`${row}-${col}`}>
            <Electorate
              name={seatName}
              party={party}
              onSelectionChange={handleElectorateChange}
            />
          </td>
        )
      }
      return cols;
    };

    return (
      <table className="electorate-map">
        <tbody>
          {renderGridRows()}
        </tbody>
      </table>
    );
  }

  // Update the data used to construct the cartogram
  const handleCartogramDataChange = (locations, parties) => {
    setLocations(locations);
    setParties(parties);
  }

  // Update the currently selected electorate
  const handleElectorateChange = (electorate) => {
    setCurrentElectorate(electorate);
  }

  return (
    <div className="row">
      <div className="col-md-9">
        {renderElectorates()}
        <h4>
          Currently selected: {
            currentElectorate === "none"
              ? ""
              : `${currentElectorate} (${parties[currentElectorate]})`
          }
        </h4>
      </div>
      <div className="col-md-3">
        <DataSelector updateMapData={handleCartogramDataChange}/>
      </div>
    </div>
  );
}

export default ElectorateMap;
