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
  partyClasses.set("Nick Xenophon Team", "electorate-nxt")

  return partyClasses;
}

/*
 * Get a Map mapping each dataset to the name of each data file needed to
 * render that dataset
 */
export function getDatasetFiles() {
  const datasetLocations = new Map();

  datasetLocations.set("2016 Federal Election Results", {
    locations: "locations2016.json",
    parties: "parties2016.json"
  });
  datasetLocations.set("2019 Federal Election Results", {
    locations: "locations2019.json",
    parties: "parties2019.json"
  });
  datasetLocations.set("Before 2022 Federal Election", {
    locations: "locations2019.json",
    parties: "partiespre2022.json"
  });
  datasetLocations.set("2022 Federal Election Results", {
    locations: "locations2022.json",
    parties: "parties2022.json"
  });
  datasetLocations.set("2014 Victorian Election Results", {
    locations: "locationsvic2014.json",
    parties: "partiesvic2014.json"
  })
  datasetLocations.set("Before 2018 Victorian Election", {
    locations: "locationsvic2014.json",
    parties: "partiesvicpre2018.json"
  })
  datasetLocations.set("2018 Victorian Election Results", {
    locations: "locationsvic2014.json",
    parties: "partiesvic2018.json"
  })
  datasetLocations.set("2022 Victorian Election Results", {
    locations: "locationsvic2022.json",
    parties: "partiesvic2022.json"
  })

  return datasetLocations;
}
