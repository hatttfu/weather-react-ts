import React from 'react';

import axios from 'axios';

import Display from './components/Display';
import {WeatherProps} from './types';

import Sidebar from './components/Sidebar';


// const ACCESS_KEY = 'e0d9500c34095c04abb628112a4c4ccb';
const ACCESS_KEY = '8f37d29f73838c7d8ca43e1ecf4df785';

function App() {

    let initialWeather:WeatherProps = {
        cloudcover: 0,
        humidity: 0,
        time: "",
        precip: 0,
        pressure: 0,
        temperature: 0,
        visibility: 0,
        description: [""],
        icons: [""],
        windSpeed: 0
    }

    const [weather, setWeather] = React.useState<WeatherProps>(initialWeather)

    console.log('weather ', weather)

    const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.keyCode || event.key;
        if (key === 13) {
            //без as не получалось, взяла со стаковерфлоу
            const value = (event.target as HTMLInputElement).value;
            console.log(value);
            getWeather(value)
    }
    }

    async function getWeather(city: string) {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`);
        console.log(response)
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

        let weatherData = initialWeather;
        
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
                
                {weather && <Display  weather={weather}/>}
            </main>
            <div className="search">
                {weather && <Sidebar  weather={weather} onEnterPress={onEnterPress}/>}
                
            </div>
        </div>
        </div>
    );
}

export default App;
