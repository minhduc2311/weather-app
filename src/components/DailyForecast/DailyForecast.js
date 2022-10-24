import React, { useState } from "react";
import { useWeatherContext } from "../../Context/Context";
import { formatTime } from "../../utils/api";
import logo from "../../assets/icons/02d.svg";
import "./DailyForecast.css";

function DailyForecast() {

  const [state] = useWeatherContext();
  const { dailyWeather, timezone } = state;

  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };


  return (
    <div className="daily-container">

      {dailyWeather.map((item, id) => (
        <div key={id} className="daily-item " onClick={handleShowDetails}>
          <div className="day">{formatTime(item.dt, timezone, "cccc")}</div>
          <div>{Math.round(item.temp.min)}° - {Math.round(item.temp.max)}°</div>
          <img className="daily-icon" src={logo} />
          {showDetails && <div className="details">abc</div>}
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
