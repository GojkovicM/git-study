import React, { useContext, useEffect } from "react";
import "./search.scss";
import { useState } from "react";

import { WeatherContext } from "../../store/weather";
import { fetchWeekWeather } from "../../Api/service";

function Search() {
  const [search, setSearch] = useState("Belgrade");

  const { fetchWeatherContext, fetchWeekWeatherContext } = useContext(WeatherContext);

  useEffect(() => {
    fetchWeatherContext();
    fetchWeekWeatherContext()
  }, []);

  return (
    <div id="Search">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => fetchWeatherContext(search)}>klik</button>
    </div>
  );
}

export default Search;
