import {DisplayProps} from '../types'

import DisplayLoadingBlock from './loadingBlocks/DisplayLoadingBlock';

function Display( {weather, city, isLoaded}: DisplayProps)  {

console.log('hvbdjbvjhdfv', weather);
console.log('isLoaded', isLoaded);


  return (


    
    <div className="info-block">
    {!isLoaded ? <DisplayLoadingBlock /> : 
    <>

        <div className="info-main">
            <div className="temperature">{weather.temperature}°</div>
            <div className="icon-info">
                {weather.description}
            </div>
        </div>
        <div className="date-icon">
            <div className="place-time">
                <div className="place">{city}</div>
                <div className="time-info">
                    {new Date().toString().match(/[^(]*/)}
                </div>
            </div>
            <div className="description">
                <div className="icon">
                    <img src={weather.icons[0]} alt="Weather Icon" />
                </div>
                
            </div>
        </div>
    </>
        }
    </div>
  )
}

export default Display