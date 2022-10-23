import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"

export default function Weather(props){
const [weathwerData, setWeathwerData] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity)



    function handleResponse(response) {
        
        
setWeathwerData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 10000),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
});


}

function search() {
    const apiKey = `d50daaabbd98c5b47ef6ff59824a0d1e`;
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse); 
}

function handleSubmit(event) {
    event.preventDefault();
   search()
}

function handleCityChange(event){
    setCity(event.target.value);

}

if(weathwerData.ready){
    return(
        <div className="Weather">
            <form onSubmit = {handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <WeatherInfo data={weathwerData} />
            
        </div>
    )
} else {
   search()
   return("Loading...")
}
}
