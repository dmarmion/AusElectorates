/* Get a Map mapping party names to their electorate CSS class */
export function getPartyClassMap() {
  const partyClasses = new Map();

  partyClasses.set("Labor", "electorate-labor");
  partyClasses.set("Liberal", "electorate-liberal");
  partyClasses.set("Nationals", "electorate-nationals");
  partyClasses.set("Liberal National", "electorate-lnp");
  partyClasses.set("Independent", "electorate-ind");
  partyClasses.set("Greens", "electorate-greens");
  partyClasses.set("United Australia", "electorate-uap");
  partyClasses.set("Katter's Australian", "electorate-kap");
  partyClasses.set("Centre Alliance", "electorate-ca");

  return partyClasses;
}

/*
 * Get a Map mapping each dataset to the name of each data file needed to
 * render that dataset
 */
export function getDatasetFiles() {
  const datasetLocations = new Map();

  datasetLocations.set("2019 Election Results", {
    locations: "locations2019.json",
    parties: "parties2019.json"
  });
  datasetLocations.set("Before 2022 Election", {
    locations: "locations2019.json",
    parties: "partiespre2022.json"
  });
  datasetLocations.set("2022 Election Results", {
    locations: "locations2022.json",
    parties: "parties2022.json"
  });

  return datasetLocations;
}
