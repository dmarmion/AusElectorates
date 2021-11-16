import React from "react";

import Electorate from "./Electorate";

class ElectorateMap extends React.Component {
  // Render the grid of electorates
  renderElectorates() {
    const tableRows = 19;
    const tableCols = 16;
    
    const electorateNames = require("../data/locations2022.json");
    const parties = require("../data/parties2021.json")

    // Helper function to generate the rows of the table
    function renderGridRows() {
      let rows = [];
      for (let row = 0; row < tableRows; row++) {
        rows.push(
          <tr key={row}>
            {renderGridColumns(row)}
          </tr>
        )
      }
      return rows;
    }

    // Helper function to generate the columns in each row
    function renderGridColumns(row) {
      let cols = [];
      for (let col = 0; col < tableCols; col++) {
        let seatName = electorateNames[`${col},${row}`];
        let party = (seatName === "none" ? "" : parties[seatName]);

        cols.push(
          <td key={`${row}-${col}`}>
            <Electorate
              name={seatName}
              party={party}
            />
          </td>
        )
      }
      return cols;
    }

    let tableElements = (
      <table>
        <tbody>
          {renderGridRows()}
        </tbody>
      </table>
    )

    return tableElements;
  }

  render() {
    return (
      <div className="map">
        {this.renderElectorates()}
      </div>
    );
  }
}

export default ElectorateMap;
