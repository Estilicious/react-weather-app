import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..." 
                className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" 
                value="search" 
                className="btn btn-primary" />
                </div>
            
            </div>
            </form>
        <h1> Tokyo </h1>
        <ul>
        <li> Friday 23:14 
        </li>
        <li> Mostly cloudy 
        </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mostly cloudy" />20℃
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
                  Wind 1m/s
              </li>
       </ul>
       </div>
        </div>
        </div>
    )
}