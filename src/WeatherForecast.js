import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

export default function WeatherForecast(props){
let [loaded, setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

useEffect(()=>{
setLoaded (false);
}, [props.coordinates]);


//If coordinates change
//Set loaded false

function handleResponse(response){
setForecast(response.data.daily);
setLoaded (true);
}

if (loaded) {
    return(
         <div className="WeatherForecast"> 
         <div className="row">
             {forecast.map(function(dailyForecast, index){
             if (index < 5){
return (
<div className="col" key={index} >
         <WeatherForecastDay data={dailyForecast} />   
             </div>
                 );
             }else{
                 return null;
             }    
             })}
             
         </div>
         </div>
    );

}else{
let apiKey="a25893266955d940e8b2afef4aeaea90";
let longitude= props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}
&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;    
    }
}