import { createContext } from "react";
import { useState } from "react";
import { fetchWeather, fetchWeekWeather, getLocation } from "../Api/service";

export const WeatherContext = createContext({
  weather: undefined,
  weekWeather: undefined,
  fetchWeatherContext: () => {},
  fetchWeekWeatherContext: () => {},
  
});

const WeatherHandler = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [weekWeatherData, setWeekWeatherData] = useState();
  
  
  

  const fetchWeatherContext = async (city) => {
    try {
      const updateWeather = await fetchWeather(city);
      setWeatherData(updateWeather);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeekWeatherContext = async (city) => {
    try{
      const updateWeekWeather = await fetchWeekWeather(city);
      setWeekWeatherData(updateWeekWeather) 
    } catch(error) {
    console.log(error);
   }
 }
;

  


  return (
    <WeatherContext.Provider
      value={{ weather: weatherData, weekWeather: weekWeatherData ,fetchWeatherContext, fetchWeekWeatherContext, }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherHandler };
