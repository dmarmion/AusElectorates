import React from "react";

import Electorate from "./Electorate";

class Map extends React.Component {
  // Render the grid of electorates
  renderElectorates() {
    const tableRows = 19;
    const tableCols = 16;
    const electorateNames = require("../data/locations2022.json");

    // Helper function to generate the rows of the table
    function renderGridRows() {
      let rows = [];
      for (let row = 0; row < tableRows; row++) {
        rows.push(
          <tr>
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
        cols.push(
          <td>
            <Electorate
              name={electorateNames[`${col},${row}`]}
            />
          </td>
        )
      }
      return cols;
    }

    let tableElements = (
      <table>
        {renderGridRows()}
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

export default Map;
