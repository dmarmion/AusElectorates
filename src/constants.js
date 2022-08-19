// The party colours are those used by Wikipedia, see
// https://en.wikipedia.org/wiki/Category:Australia_political_party_color_templates
export const PARTY_COLOURS = new Map()
  .set("Labor", "#de3533")
  .set("Liberal", "#0047ab")
  .set("Nationals", "#006644")
  .set("Liberal National", "#1456f1")
  .set("Country Liberal", "#ff7f00")
  .set("Independent", "grey")
  .set("Greens", "#00a651")
  .set("United Australia", "#ffed00")
  .set("Katter's Australian", "#b50204")
  .set("Centre Alliance", "#ff6300")
  .set("Nick Xenophon Team", "#ff6300")
  .set("Palmer United", "#ffed00")
  .set("Yes 50-59%", "greenyellow")
  .set("Yes 60-69%", "chartreuse")
  .set("Yes 70-79%", "limegreen")
  .set("Yes 80-89%", "forestgreen")
  .set("Yes 90+%", "darkgreen")
  .set("No 50-59%", "lightsalmon")
  .set("No 60-69%", "tomato")
  .set("No 70-79%", "red")
  .set("No 80-89%", "firebrick")
  .set("No 90+%", "darkred")
  .set("Not Yet Determined", "lightgrey");

export const NO_PARTY_COLOUR = "white";

export const DATASET_FILES = [
  {
    name: "Federal Maps",
    files: new Map()
      .set("2013 Federal Election Results", {
        locations: "federal/locations2013.json",
        parties: "federal/parties2013.json",
      })
      .set("2016 Federal Election Results", {
        locations: "federal/locations2016.json",
        parties: "federal/parties2016.json",
      })
      .set("2017 Marriage Law Survey", {
        locations: "federal/locations2016.json",
        parties: "federal/marriage2017.json",
      })
      .set("Before 2019 Federal Election", {
        locations: "federal/locations2016.json",
        parties: "federal/partiespre2019.json",
      })
      .set("2019 Federal Election Results", {
        locations: "federal/locations2019.json",
        parties: "federal/parties2019.json",
      })
      .set("Before 2022 Federal Election", {
        locations: "federal/locations2019.json",
        parties: "federal/partiespre2022.json",
      })
      .set("2022 Federal Election Results", {
        locations: "federal/locations2022.json",
        parties: "federal/parties2022.json",
      }),
  },
  {
    name: "Victorian Maps",
    files: new Map()
      .set("2014 Victorian Election Results", {
        locations: "vic/locations2014.json",
        parties: "vic/parties2014.json",
      })
      .set("Before 2018 Victorian Election", {
        locations: "vic/locations2014.json",
        parties: "vic/partiespre2018.json",
      })
      .set("2018 Victorian Election Results", {
        locations: "vic/locations2014.json",
        parties: "vic/parties2018.json",
      })
      .set("2022 Victorian Election Results", {
        locations: "vic/locations2022.json",
        parties: "vic/parties2022.json",
      }),
  },
];
