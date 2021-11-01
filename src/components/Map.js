import React from "react";

import Electorate from "./Electorate";

class Map extends React.Component {
  // Render the grid of electorates
  renderElectorates() {
    const tableRows = 16;
    const tableCols = 20;

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
    function renderGridColumns(rowNo) {
      let cols = [];
      for (let col = 0; col < tableCols; col++) {
        cols.push(
          <td>
            <Electorate
              row={rowNo}
              col={col}
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
