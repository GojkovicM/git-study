import React, { useContext } from "react";
import './air-conditions.scss'
import { WeatherContext } from "../../store/weather";

function AirConditions() {

    const { weather } = useContext(WeatherContext)

    return (  
        <div id="air-conditions">
             <div className="wrapperConditions">
             <div className="humidity" >
                <h3>Humidity</h3>
                <p>{weather?.data.main.humidity} <br /> <span>%</span></p>
             </div>
             <div className="pressure">
                <h3>Pressure </h3>
                <p> {weather?.data.main.pressure} <br /> <span>mbar</span></p>
             </div>
             <div className="wind"> 
                <h3>Wind</h3>
                 <p> {weather?.data.wind.speed} <br /> <span>m/s</span></p>
             </div>
             <div className="visibility"> 
                <h3>Visibility</h3>
                <p>{weather?.data.visibility} <br/> <span>m</span></p>
             </div>
             </div> 

             </div>
    );
}

export default AirConditions; 