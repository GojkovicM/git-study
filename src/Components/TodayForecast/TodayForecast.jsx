import React, { useContext } from "react";
import "./today-forecast.scss";

import { WeatherContext } from "../../store/weather";

function TodayForecast() {
  const { weekWeather } = useContext(WeatherContext);

  return (
    <div id="TodayForecast">
        <div className="wrapForecast">
      {weekWeather?.list.slice(0, 4).map((e) => (
        <div>
          <h3>{e.dt_txt.substring(11).slice(0, 5)}</h3>
          <h1>
            {Math.round(e.main.temp)}
            <span>&#176;</span>
          </h1>
          <img
            src={
              "http://openweathermap.org/img/w/" +
              `${e.weather[0].icon}` +
              ".png"
            }
          />
          <p>{e.weather[0].main}</p>
        </div>
      ))}
        </div>
    </div>
  );
}

export default TodayForecast;
