import React, { useContext, useEffect, useState } from "react";
import "./city-temperature.scss";
import { WeatherContext } from "../../store/weather";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

function CityTemperature() {
  const [button, setButton] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const { weather, handleFavoriteCity, favorite } = useContext(WeatherContext);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  const favoriteButton = () => {
    if (favorite.includes(weather?.data.name)) {
      setButton("remove from favorites");
      setIsFavorite(!isFavorite);
    } else {
      setButton("add to favorites");
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    favoriteButton();
  }, [favorite, weather]);

  return (
    <div id="CityTemperature">
      <div className="CityWrap">
        <h1>{weather?.data.name}</h1>
        <p>
          Feels like {Math.round(weather?.data.main.feels_like)}
          <span>&#176;</span>
        </p>
        <h1>
          {Math.round(weather?.data.main.temp)}
          <span>&#176;</span>
        </h1>

        <button
          onClick={() => {
            handleFavoriteCity(weather?.data.name);
            favoriteButton();
          }}
        >
          {isFavorite ? <MdOutlineStarPurple500 /> : <MdOutlineStarOutline />}
          {button}
        </button>
      </div>
      <img
        src={
          "http://openweathermap.org/img/w/" +
          `${weather?.data.weather[0].icon}` +
          ".png"
        }
        alt="sunce"
      />
    </div>
  );
}

export default CityTemperature;
