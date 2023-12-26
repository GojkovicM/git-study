import React from "react";
import './city-temperature.scss'

function CityTemperature() {
    return (  
        <div id="CityTemperature">
            <div className="CityWrap">
                <h1>New York</h1>
                <p>Feels like 5<span>&#176;</span></p>
                <h1>7<span>&#176;</span></h1>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/128/979/979585.png" alt="" />
        </div>
    );
}

export default CityTemperature; 