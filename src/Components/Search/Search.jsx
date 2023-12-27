import React, { useContext } from "react";
import './search.scss'
import { useState } from "react";
import { fetchWeather } from "../../Api/service";
import { fetchWeatherContext } from "../../Api/service";
import { WeatherContext } from "../../store/weather";

function Search() {

    const [search, setSearch] = useState("");

    const {fetchWeatherContext} = useContext(WeatherContext)
    
    


    return (  
        <div id="Search">
            <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={() => fetchWeatherContext(search)}>klik</button>
        </div>
    );
}

export default Search; 
