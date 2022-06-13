import React from "react";

import DatasetButtons from "./DatasetButtons";
import { DATASET_FILES } from "../utils";

const DataSelector = ({ updateMapData }) => {
  // Tell the ElectorateMap which files should be used to generate the cartogram
  const handleSelectionChange = (locationsFile, partiesFile) => {
    // It is necessary to include the '../data/' in each call to require() so
    // that webpack knows to bundle the .json files in that folder
    let locations = require(`../data/${locationsFile}`);
    let parties = require(`../data/${partiesFile}`);

    updateMapData(locations, parties);
  }

  return (
    <div className="data-selector">
      {
        DATASET_FILES.map(({ name, files }) => {
          return (
            <React.Fragment key={name}>
              <h5 className="text-center">{ name }</h5>
              <DatasetButtons datasets={files} onChange={handleSelectionChange}/>
            </React.Fragment>
          )
        })
      }
    </div>
  );
}

export default DataSelector;
