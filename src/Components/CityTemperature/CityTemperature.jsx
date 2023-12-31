import React, { useContext } from "react";
import './city-temperature.scss'
import { WeatherContext } from "../../store/weather";


function CityTemperature() {

    const { weather } = useContext (WeatherContext);
    
    

    return (  
        <div id="CityTemperature">
            <div className="CityWrap">
                <h1>{weather?.data.name}</h1>
                <p>Feels like {Math.round(weather?.data.main.feels_like)}<span>&#176;</span></p>
                <h1>{Math.round(weather?.data.main.temp)}<span>&#176;</span></h1>
            </div>
            <img src={"http://openweathermap.org/img/w/" + `${weather?.data.weather[0].icon}` + ".png"} alt="sunce" />
        </div>
    );
}

export default CityTemperature; 