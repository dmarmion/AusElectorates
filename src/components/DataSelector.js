import React from "react";

import { getDatasetFiles } from "../utils";

function DataSelector({ updateMapData }) {
  // Tell the ElectorateMap which files should be used to generate the cartogram
  const handleSelectionChange = (locationsFile, partiesFile) => {
    // It is necessary to include the '../data/' in each call to require() so
    // that webpack knows to bundle the .json files in that folder
    let locations = require(`../data/${locationsFile}`);
    let parties = require(`../data/${partiesFile}`);

    updateMapData(locations, parties);
  }

  const dataFiles = getDatasetFiles();

  return (
    <div className="data-selector">
      {
        Array.from(dataFiles.keys()).map((datasetName) => {
          return (
            <div className="form-check" key={datasetName}>
              <input
                className="btn-check"
                type="radio"
                name="dataset"
                id={datasetName}
                value={datasetName}
                onChange={() => handleSelectionChange(
                  dataFiles.get(datasetName).locations,
                  dataFiles.get(datasetName).parties
                )}
              />
              <label className="btn btn-secondary" htmlFor={datasetName}>
                {datasetName}
              </label>
            </div>
          );
        })
      }
    </div>
  );
}

export default DataSelector;
