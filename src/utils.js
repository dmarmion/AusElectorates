/* Get a Map mapping party names to their electorate CSS class */
function getPartyClassMap() {
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

export default getPartyClassMap;
