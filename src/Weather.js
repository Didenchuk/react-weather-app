import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props){
const [weathwerData, setWeathwerData] = useState({ready:false});



    function handleResponse(response) {
setWeathwerData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
    date: "Wednesday 07:00",
   


});


}

if(weathwerData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <h1>
               {weathwerData.city}
                </h1>
                <ul>
                    <li>{weathwerData.date}</li>
                    <li className="text-capitalize">{weathwerData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                           
                        <img src={weathwerData.iconUrl} alt={weathwerData.description} className="float-start"/>
                      <div className="float-start">
                       <span className="temperature">{weathwerData.temperature}</span> <span className="unit">°C </span>
                       </div>
                       </div>
                    </div>
                    <div className="col-6">
                       <ul>
                    
                        <li>Humidity: {weathwerData.humidity} %</li>
                        <li>Wind: {weathwerData.wind} km/h</li>
                        </ul> 
                       
                    </div>
                </div>
        </div>
    )
} else {
    const apiKey = `d50daaabbd98c5b47ef6ff59824a0d1e`;
    let city = "New York";
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   return("Loading...")
}

 

   

}