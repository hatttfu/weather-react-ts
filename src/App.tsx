import React from 'react';
import searchIcon from './images/search.png';

import axios from 'axios';

import Display from './components/Display';
import WeatherProps from './types';

import Sidebar from './components/Sidebar';


const ACCESS_KEY = 'e0d9500c34095c04abb628112a4c4ccb';

function App() {



    const [weather, setWeather] = React.useState<WeatherProps | {}>({})

    console.log('weather ', weather)

    

    React.useEffect(() => {
        getWeather()
    }, [])

    async function getWeather() {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=New York`);

        sortWeather(response.data.current)
    }

    function sortWeather(data: any) {

        console.log(data);

        
        const {
            cloudcover, 
            humidity,
            precip, 
            pressure,
            visibility,
            wind_speed: windSpeed,
            
            observation_time: time,  
            temperature,  
            weather_descriptions: description, weather_icons: icons } = data;

        let weatherData = {};
        
        weatherData = {
            cloudcover, 
            humidity,
            precip, 
            pressure,
            visibility,
            windSpeed,
            
            time,  
            temperature,  
            description, 
            icons
        }
        
        setWeather(weatherData)

    }
    
    return (
        
        <div className="App">
        <div className="container">
            <header className="header">
                the.weather
            </header>
            <main className="main">
                
                <Display  weather={weather}/>
            </main>
            <div className="search">
                <Sidebar />
            </div>
        </div>
        </div>
    );
}

export default App;
