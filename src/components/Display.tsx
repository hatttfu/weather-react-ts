import React from 'react'
import sunIcon from '../images/sun.png';
import {WeatherProps} from '../types'
// import {DisplayProps} from '../types'

function Display( {weather}:{weather:WeatherProps})  {

console.log('hvbdjbvjhdfv', weather);

  return (
    <div className="info-block">
        <div className="temperature">{weather.temperature}°</div>
        <div className="place-time">
            <div className="place">London</div>
            <div className="time-info">
                <div className="time">{weather.time} </div>-
                <div className="weekday">Tuesday</div>
                <div className="date">22 Oct '19</div>
            </div>
        </div>
        <div className="description">
            <div className="icon">
                <img src={weather.icons[0]} alt="Weather Icon" />
            </div>
            <div className="icon-info">
                {weather.description}
            </div>
        </div>
    </div>
  )
}

export default Display