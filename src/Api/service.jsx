import axios from "axios";
import { useContext } from "react";

const apiKey = "8f9e5c3adf52c556fa34ab5521eede58";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${apiKey}`;

export const fetchWeather = async (city = "Belgrade") => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};



export const fetchWeekWeather = async (city = "Belgrade") => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


