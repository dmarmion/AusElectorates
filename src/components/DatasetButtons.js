import React from "react"

const DatasetButtons = ({ datasets, onChange }) => {
  return (
    Array.from(datasets.keys()).map((datasetName) => {
      return (
        <div className="form-check dataset-button" key={datasetName}>
          <input
            className="btn-check"
            type="radio"
            name="dataset"
            id={datasetName}
            value={datasetName}
            onChange={() => onChange(
              datasets.get(datasetName).locations,
              datasets.get(datasetName).parties
            )}
          />
          <label className="btn btn-secondary" htmlFor={datasetName}>
            {datasetName}
          </label>
        </div>
      );
    })
  )
}

export default DatasetButtons;
