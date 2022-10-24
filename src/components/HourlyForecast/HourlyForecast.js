import React from "react";
import { useWeatherContext } from "../../Context/Context";
import smLogo from "../../assets/icons/02d.svg";

import { formatTime } from "../../utils/api";
import "./HourlyForecast.css";

function HourlyForecast() {
  const [state] = useWeatherContext();
  const { hourlyWeather, timezone } = state;

  return (
    <div className="hourly-container">
      {hourlyWeather.slice(0,25).map((item, id) => (
        <div className="hourly-item" key={id}>
          <div className="hourly-time">
            {formatTime(item.dt, timezone, "T")}
          </div>
          <img className="hourly-icon" src={smLogo} alt="weather-icon" />
          <div className="hourly-degree">{Math.round(item.temp)}°</div>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
