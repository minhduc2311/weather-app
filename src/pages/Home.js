import React from "react";
import { useWeatherContext } from "../Context/Context";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  // const [currentWeather, setCurrentWeather] = useState(null);
  //   const [hourlyWeather, setHourlyWeather] = useState(null);
  //   const [dailyWeather, setDailyWeather] = useState(null);
  //   const [timezone, setTimezone] = useState(null);

  const [state] = useWeatherContext();
  const { currentWeather, hourlyWeather } = state;

  return (
    <div>
        
      {currentWeather && <CurrentWeather />}
      <div className="tab-titles">
        <div className="hourly-title">Hourly</div>
        <Link to="/daily-forecast" className="daily-button">
          Daily <MdNavigateNext className="button-icon" color="#CE7E00" />
        </Link>
      </div>

      {hourlyWeather && <HourlyForecast />}
    </div>
  );
}

export default Home;
