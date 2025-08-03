import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
   const [weatherInfo , setWeatherInfo] = useState ({
        city : "Delhi",
        feelsLike : 34.39,
        humidity : 55,
        temp : 31.38,
        tempMax : 31.38,
        tempMin : 31.38,
        weather : "broken clouds"

   }); 

   let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo); 
   }
    return (
        <div>
            <h1> Weather App</h1>
            <SearchBox updateInfo ={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )

}