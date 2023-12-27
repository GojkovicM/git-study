import React, { useContext } from "react";
import './today-forecast.scss'
import { fetchWeather } from "../../Api/service";
import { WeatherContext } from "../../store/weather";


function TodayForecast() {

    const {weather} = useContext(WeatherContext)
    console.log(weather);
    fetchWeather()
    return (  
        <div id="TodayForecast">
            <p>TODAY'S FORECAST</p>
            </div>
    );
}

export default TodayForecast; 