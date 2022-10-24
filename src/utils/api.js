import { DateTime } from "luxon";

export const geoApiOptions = (inputValue) => {
  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    headers: {
      "X-RapidAPI-Key": "d67bac99a3msh2eb963799ba1deap1bb8d0jsna7e1b58cb798",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return options;
};

export const WEATHER_API_KEY = "f1654f2280263770a48651e90f8a83c4";

export const formatTime = (secs, zone, format) =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
