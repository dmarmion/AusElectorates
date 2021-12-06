import React from "react";

import Electorate from "./Electorate";

class ElectorateMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // By default, use the current state of parliament
      locations: require("../data/locations2019.json"),
      parties: require("../data/partiespre2022.json"),
      currentElectorate: "none"
    };

    this.handleElectorateChange = this.handleElectorateChange.bind(this);
  }

  // Render the grid of electorates
  renderElectorates() {
    const tableRows = 19;
    const tableCols = 16;
    
    // Helper function to generate the rows of the table
    const renderGridRows = () => {
      let rows = [];
      for (let row = 0; row < tableRows; row++) {
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
      for (let col = 0; col < tableCols; col++) {
        let seatName = this.state.locations[`${col},${row}`];
        let party = (seatName === "none" ? "" : this.state.parties[seatName]);

        cols.push(
          <td key={`${row}-${col}`}>
            <Electorate
              name={seatName}
              party={party}
              onSelectionChange={this.handleElectorateChange}
            />
          </td>
        )
      }
      return cols;
    };

    let tableElements = (
      <table className="electorate-map">
        <tbody>
          {renderGridRows()}
        </tbody>
      </table>
    )

    return tableElements;
  }

  // Update the currently selected electorate
  handleElectorateChange(electorate) {
    this.setState({currentElectorate: electorate});
  }

  render() {
    return (
      <div>
        {this.renderElectorates()}
        <h4>
          Currently selected: {
            this.state.currentElectorate === "none"
              ? ""
              : `${this.state.currentElectorate} ` + 
                `(${this.state.parties[this.state.currentElectorate]})`
          }
        </h4>
      </div>
    );
  }
}

export default ElectorateMap;
