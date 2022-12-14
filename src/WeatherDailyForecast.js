import React, {useState, useEffect} from "react";
import "./WeatherDailyForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherDailyForecast(props){
    let[loaded,setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    useEffect(()=>{
       setLoaded(false);
    }, [props.coordinates])

 function handleResponse (response){
    setForecast(response.data.daily);
    setLoaded(true);
 }

   
if(loaded) {
    return(
        <div className="WeatherDailyForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if(index<6) {
                    return(
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                     </div>
                     );
                } else{
                    return null
                }
                
            })}
        
        </div>
        </div>
    )
}else{
    let apiKey= `d50daaabbd98c5b47ef6ff59824a0d1e`;
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
    
}

   
}