import React, { useContext, useEffect, useState } from "react";
import "./favorites.scss";
import { WeatherContext } from "../../store/weather";
import { NavLink } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  

  const {
    favorite,
    fetchWeatherContext,
    fetchWeekWeatherContext,
    removeFavorite,
    handleSelectedFavorite
  } = useContext(WeatherContext);

  useEffect(() => {
    setFavorites(favorite);
  }, [favorite]);

  const handleRemoveFavorite = (city) => {
    removeFavorite(city);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favCity) => favCity !== city)
    );
  };

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  return (
    <div id="Favorites">
      {favorites.map((e) => (
        <ul>
          <li onClick={() => handleSelectedFavorite(e)}>
            <NavLink to="/">{e}</NavLink>{" "}
          </li>
          <button onClick={() => handleRemoveFavorite(e)}>Remove</button>
        </ul>
      ))}
    </div>
  );
}

export default Favorites;
