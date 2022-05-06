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

  partyClasses.set("Yes 50-59%", "electorate-yes50");
  partyClasses.set("Yes 60-69%", "electorate-yes60");
  partyClasses.set("Yes 70-79%", "electorate-yes70");
  partyClasses.set("Yes 80-89%", "electorate-yes80");
  partyClasses.set("Yes 90+%", "electorate-yes90");
  partyClasses.set("No 50-59%", "electorate-no50");
  partyClasses.set("No 60-69%", "electorate-no60");
  partyClasses.set("No 70-79%", "electorate-no70");
  partyClasses.set("No 80-89%", "electorate-no80");
  partyClasses.set("No 90+%", "electorate-no90");

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
  datasetLocations.set("2017 Marriage Law Survey", {
    locations: "locations2016.json",
    parties: "marriage2017.json"
  })
  datasetLocations.set("Before 2019 Federal Election", {
    locations: "locations2016.json",
    parties: "partiespre2019.json"
  })
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
