import React, { useContext } from "react";
import "./week-conditions.scss";
import { WeatherContext } from "../../store/weather";

function WeekConditions() {
  const { weekWeather } = useContext(WeatherContext);

  console.log(weekWeather);

  return (
    <div id="WeekConditions">
        <h2>Weather Forecast - 5 days</h2>
        <div className="wrapConditions">
      {weekWeather?.list
        .filter((e, i) => e.dt_txt.substring(11).slice(0, 5) === "15:00")
        .map((e) => (
          <div>
            {" "}
            <h3>{e.dt_txt.substring(8).slice(0, 2)}</h3>
            <img src={
                "http://openweathermap.org/img/w/" +
                `${e.weather[0].icon}` +
                ".png"
                } alt="" />
            <h1>{Math.round(e.main.temp)}
            <span>&#176;</span>
            </h1>
          </div>
        ))}
        </div>
    </div>
  );
}

export default WeekConditions;
