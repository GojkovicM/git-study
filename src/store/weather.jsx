import { createContext } from "react";
import { useState } from "react";
import { fetchWeather } from "../Api/service";

export const WeatherContext = createContext({
  weather: undefined,
  fetchWeatherContext: () => {},
});

const WeatherHandler = ({ children }) => {
  const [weatherData, setWeatherData] = useState(50);

  function fetchWeatherContext(city) {
    fetchWeather(city);
  }

  return (
    <WeatherContext.Provider
      value={{ weather: weatherData, fetchWeatherContext }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherHandler };
