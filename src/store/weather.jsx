import { createContext } from "react";
import { useState } from "react";

export const WeatherContext = createContext({
    weather:undefined
})

const WeatherHandler = ({children}) => {

    const [weatherData, setWeatherData] = useState(50);
    return (
        <WeatherContext.Provider value={{weather:weatherData}}>
            {children}
        </WeatherContext.Provider>
    )   
}

export { WeatherHandler };