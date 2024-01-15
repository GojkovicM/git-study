import React from "react";
import Search from "../../Components/Search/Search";
import CityTemperature from "../../Components/CityTemperature/CityTemperature";
import Favorites from "../../Components/Favorites/Favorites";
import TodayForecast from "../../Components/TodayForecast/TodayForecast";
import AirConditions from "../../Components/AirConditions/AirConditions";

const Landing = () => {
  return (
    <div>
      <Search></Search>
      <CityTemperature></CityTemperature>
      <TodayForecast></TodayForecast>
      <AirConditions></AirConditions>
      
    </div>
  );
};

export default Landing;