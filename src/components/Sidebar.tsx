import React from 'react';
import {SidebarProps} from '../types';
import searchIcon from '../images/search.png';
import WeatherLoadingBlock from './loadingBlocks/WeatherLoadingBlock'

const keys = [
    'cloudcover', 
    'humidity',
    'precip', 
    'pressure',
    'visibility',
    'windSpeed'
]

function Sidebar({weather, onEnterPress, isLoaded}: SidebarProps) {
  return (
    <div className="form">
        <button className="search-button">
                <img src={searchIcon} alt="Check weather" />
        </button>
        <input type="search" placeholder="Type city here..." className="search-town" onKeyDown={onEnterPress}/>
        <div className="details">
            <h3>Weather Details</h3>

            {!isLoaded  ? <WeatherLoadingBlock /> :

            <div className="weather-block">
            
                {
                    keys.map(key => {
                        return (
                            <div key={keys.indexOf(key)}>
                                <div className="name">{key}</div>

                                {/* не работает */}
                                {/* <div className="value">{weather[key]} %</div> */}

                                {/* со стаковерфлоу
                                хз как это */}
                                <div className="value">{(weather as any )[key]} </div>
                                
                            </div>
                        )
                    })
                }
                
                {/* <div>
                    <div className="name">Cloudcover</div>
                    <div className="value">{weather.cloudcover}</div>
                </div> */}

            </div>
        }
        </div>
    </div>
  )
}

export default Sidebar