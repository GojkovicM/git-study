import axios from "axios";


const apiKey = "1daa3bb1550c453f0d3597c3c5baa83b"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${apiKey}`


export const fetchWeather = async (city = "Belgrade") =>  {
    try{
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        console.log(res);
        return res ;
    } catch (error){
        console.log(error);
    }

}


  