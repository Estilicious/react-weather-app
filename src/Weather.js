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
        <h1> Tokyo </h1>
        <ul>
        <li> Friday 23:14 
        </li>
        <li> Mostly cloudy 
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
                 <span className="temperature">20 </span>
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
                  Wind 1m/s
              </li>
       </ul>
       </div>
        </div>
        </div>
    )
}