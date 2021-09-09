import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
console.log(response.data);
}
let apiKey="a25893266955d940e8b2afef4aeaea90";
let longitude= props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}
&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

    return(
         <div className="WeatherForecast"> 
         <div className="row">
             <div className="col">
            <div className="WeatherForecast-Day"> Thu </div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">22°</span>
                <span className="WeatherForecast-temperature-min">18°</span>
            </div>
             </div>

         </div>
         </div>
    )
}