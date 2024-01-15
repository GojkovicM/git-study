import { createContext } from "react";
import { useState } from "react";
import { fetchWeather, fetchWeekWeather, getLocation } from "../Api/service";

export const WeatherContext = createContext({
  weather: undefined,
  weekWeather: undefined,
  fetchWeatherContext: () => {},
  fetchWeekWeatherContext: () => {},
  handleFavoriteCity: () => {},
  favorite: [],
  removeFavorite: () => {},
  handleSelectedFavorite: () => {},
  selected: "",
  setSelected: () => {},
});

const WeatherHandler = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [weekWeatherData, setWeekWeatherData] = useState();
  const [favoriteCity, setFavoriteCity] = useState([]);
  const [selectedFavorite, setSelectedFavorite] = useState("Belgrade");

  const fetchWeatherContext = async (city) => {
    try {
      const updateWeather = await fetchWeather(city);
      setWeatherData(updateWeather);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeekWeatherContext = async (city) => {
    try {
      const updateWeekWeather = await fetchWeekWeather(city);
      setWeekWeatherData(updateWeekWeather);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavoriteCity = (city) => {
    if (favoriteCity.includes(city)) {
      favoriteCity.splice(favoriteCity.indexOf(city), 1);
    } else {
      setFavoriteCity((prevFavorites) => [...prevFavorites, city]);
    }
  };

  const removeFavorite = (city) => {
    favoriteCity.splice(favoriteCity.indexOf(city), 1);
  };

  const handleSelectedFavorite = (favCity) => {
    setSelectedFavorite(favCity);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: weatherData,
        weekWeather: weekWeatherData,
        fetchWeatherContext,
        fetchWeekWeatherContext,
        handleFavoriteCity,
        favorite: favoriteCity,
        removeFavorite,
        handleSelectedFavorite,
        selected: selectedFavorite,
        setSelected: setSelectedFavorite
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherHandler };
