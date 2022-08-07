/* Get a Map mapping party names to their electorate CSS class */
export function getPartyClassMap() {
  const partyClasses = new Map();

  partyClasses.set("Labor", "electorate-labor");
  partyClasses.set("Liberal", "electorate-liberal");
  partyClasses.set("Nationals", "electorate-nationals");
  partyClasses.set("Liberal National", "electorate-lnp");
  partyClasses.set("Country Liberal", "electorate-clp");
  partyClasses.set("Independent", "electorate-ind");
  partyClasses.set("Greens", "electorate-greens");
  partyClasses.set("United Australia", "electorate-uap");
  partyClasses.set("Katter's Australian", "electorate-kap");
  partyClasses.set("Centre Alliance", "electorate-ca");
  partyClasses.set("Nick Xenophon Team", "electorate-nxt")
  partyClasses.set("Palmer United", "electorate-pup");

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

export const DATASET_FILES = [
  {
    name: "Federal Maps",
    files: new Map()
      .set("2013 Federal Election Results", {
        locations: "federal/locations2013.json",
        parties: "federal/parties2013.json"
      })
      .set("2016 Federal Election Results", {
        locations: "federal/locations2016.json",
        parties: "federal/parties2016.json"
      })
      .set("2017 Marriage Law Survey", {
        locations: "federal/locations2016.json",
        parties: "federal/marriage2017.json"
      })
      .set("Before 2019 Federal Election", {
        locations: "federal/locations2016.json",
        parties: "federal/partiespre2019.json"
      })
      .set("2019 Federal Election Results", {
        locations: "federal/locations2019.json",
        parties: "federal/parties2019.json"
      })
      .set("Before 2022 Federal Election", {
        locations: "federal/locations2019.json",
        parties: "federal/partiespre2022.json"
      })
      .set("2022 Federal Election Results", {
        locations: "federal/locations2022.json",
        parties: "federal/parties2022.json"
      })
  },
  {
    name: "Victorian Maps",
    files: new Map().set("2014 Victorian Election Results", {
        locations: "vic/locations2014.json",
        parties: "vic/parties2014.json"
      })
      .set("Before 2018 Victorian Election", {
        locations: "vic/locations2014.json",
        parties: "vic/partiespre2018.json"
      })
      .set("2018 Victorian Election Results", {
        locations: "vic/locations2014.json",
        parties: "vic/parties2018.json"
      })
      .set("2022 Victorian Election Results", {
        locations: "vic/locations2022.json",
        parties: "vic/parties2022.json"
      })
  }
];
