import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

    export default function Weather(){
    const [ready, setReady]=useState(false);
    const [weatherData, setWeatherData]=useState({});
    

function handleResponse(response){
console.log(response.data);
setWeatherData({
    temperature:response.data.main.temp,
wind:12,
city:response.data.name,    
});

setReady(true);
}
if (ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..." 
                className="form-control"
                autoFocus="on"
                />
                </div>
                <div className="col-3">
                <input type="submit" 
                value="search" 
                className="btn btn-primary w-100" />
                </div>
            
            </div>
            </form>
        <h1> {weatherData.city} </h1>
        <ul>
        <li> Tuesday 23:14 
        </li>
        <li> {weatherData.description} 
        </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearFix"> 
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
                alt="Mostly cloudy"
                classNmae="float-left" 
                />
                <div className="float-left">
                 <span className="temperature">{Math.round(weatherData.temperature)} </span>
                 <span className="unit">℃ </span>
                 </div>
   </div>
   </div>
   <div className="col-6">
       <ul>
          <li>
              Precipitation 40%
              </li> 
 <li>             
                  Humidity 99%
              </li>
              <li>
                  Wind: {weatherData.wind} 1m/s
              </li>
       </ul>
       </div>
        </div>
        </div>
    );
}

else{
    
    const apiKey="a25893266955d940e8b2afef4aeaea90";
    let city="Tokyo";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then (handleResponse);

    return "Loading...";
}
}