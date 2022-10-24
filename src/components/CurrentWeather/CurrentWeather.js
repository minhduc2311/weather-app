import React from "react";
import { useWeatherContext } from "../../Context/Context";
import logo from "../../assets/icons/02d.svg";
import { formatTime } from "../../utils/api";
import { GrLocation } from 'react-icons/gr';

import "./CurrentWeather.css";

function CurrentWeather() {
  const [state, dispatch] = useWeatherContext();
  const { city, currentWeather, timezone } = state;

  return (
    <div className="current-weather-container">
      <div className="main">
        <div className="date">{formatTime(currentWeather.dt, timezone, "cccc, dd LLL yyyy")}</div>
        <div className="description">
          <div className="description-left">
            <div>
              <div className="degree">{Math.round(currentWeather.temp)}</div>
              <div className="weather-type">{currentWeather.weather[0].main}</div>
            </div>
            <div className="unit">°</div>
          </div>
          <img className="weather-icon" src={logo} alt="" />
        </div>
        <div className="location"><GrLocation/>{city}</div>
      </div>
      <div className="details">
        <div className="details-element">
          <div className="details-label">Pressure</div>
          <div className="details-value">{currentWeather.pressure} hPa</div>
        </div>
        <div className="details-element">
          <div className="details-label">Wind</div>
          <div className="details-value">{currentWeather.wind_speed} m/s</div>
        </div>
        <div className="details-element">
          <div className="details-label">Humidity</div>
          <div className="details-value">{currentWeather.humidity} %</div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
