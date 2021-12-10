import React from "react";

import { getDatasetFiles } from "../utils";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  /*
   * Tell the ElectorateMap to update the data used to construct the cartogram
   * of electorates
   */
  handleSelectionChange(locationsFile, partiesFile) {
    // It is necessary to include the '../data/' in each call to require() so
    // that webpack knows to bundle the .json files in that folder
    let locations = require(`../data/${locationsFile}`);
    let parties = require(`../data/${partiesFile}`);
    this.props.onDataChange(locations, parties);
  }

  render() {
    const dataFiles = getDatasetFiles();
    return (
      <div>
        {
          Array.from(dataFiles.keys()).map((datasetName) => {
            return (
              <div key={datasetName}>
                <input
                  type="radio"
                  name="dataset"
                  id={datasetName}
                  value={datasetName}
                  onChange={() => this.handleSelectionChange(
                    dataFiles.get(datasetName).locations,
                    dataFiles.get(datasetName).parties
                  )}
                />
                <label htmlFor={datasetName}>{datasetName}</label>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default DataSelector;
