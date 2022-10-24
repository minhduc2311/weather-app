import React, {useState} from "react";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { Link, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useWeatherContext } from "./Context/Context";
import Search from "./components/Search/Search";
import { WEATHER_API_KEY } from "./utils/api";
import axios from "axios";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useWeatherContext();
  console.log(state);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${WEATHER_API_KEY}&units=metric`;

    const weatherFetch = axios
      .get(weatherUrl)
      .then((response) => {
        const currentWeatherResponse = response.data.current;
        const hourlyWeatherResponse = response.data.hourly;
        const dailyWeatherResponse = response.data.daily;
        const timeZoneResponse = response.data.timezone;

        dispatch({ type: "SET_CITY", payload: searchData.label });
        dispatch({ type: "SET_CURRENT", payload: currentWeatherResponse });
        dispatch({ type: "SET_HOURLY", payload: hourlyWeatherResponse });
        dispatch({ type: "SET_DAILY", payload: dailyWeatherResponse });
        dispatch({ type: "SET_TIMEZONE", payload: timeZoneResponse });

        setShow(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {show ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-forecast" element={<DailyForecast />} />
        </Routes> : <div className="alert">Where are you now?</div>
      }
    </div>
  );
}

export default App;
