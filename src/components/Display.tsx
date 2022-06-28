import React from 'react'
import sunIcon from '../images/sun.png';
import DisplayProps from '../types'

function Display( {weather}  :DisplayProps     )  {

console.log('hvbdjbvjhdfv', weather);

  return (
    <div className="info-block">
        <div className="temperature">52°</div>
        <div className="place-time">
            <div className="place">London</div>
            <div className="time-info">
                <div className="time">10:36 </div>-
                <div className="weekday">Tuesday</div>
                <div className="date">22 Oct '19</div>
            </div>
        </div>
        <div className="description">
            <div className="icon">
                <img src={sunIcon} alt="" />
            </div>
            <div className="icon-info">
                Sunny
            </div>
        </div>
    </div>
  )
}

export default Display