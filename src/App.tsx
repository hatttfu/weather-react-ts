import React from 'react';

import axios from 'axios';

import Display from './components/Display';
import {WeatherProps} from './types';

import Sidebar from './components/Sidebar';

// const ACCESS_KEY = 'e0d9500c34095c04abb628112a4c4ccb';
const ACCESS_KEY = '8f37d29f73838c7d8ca43e1ecf4df785';

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
const token = "caa63103f98ae9cd6b61d17708ad1f6eaf94bc00";

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


    //isLoaded state
    const [isLoaded, setLoaded] = React.useState<boolean>(false);

    const [weather, setWeather] = React.useState<WeatherProps>(initialWeather)

    console.log('weather ', weather)

    const [city, setCity] = React.useState<string>("");

    function getCoordinates(position: any) {
        const { coords: { latitude: lat, longitude: lon} } = position;
        const query = {
            lat,
            lon
        } 
        console.log('query ', query)
        getPlace(query)
    }
    
    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => getCoordinates(position));
        }
    }, [])
    
    
    function getCity(result: any) {
        const string = result.suggestions[0].value;
    
        let city = string.match(/[^,]*/)[0];
        city = city.slice(2,)

        getWeather(city)
        
    }
    
    function getPlace(query: any) {
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(query)
        })
            .then(response => response.json())
            .then(result => getCity(result))
            .catch(error => console.log("error", error));
    }
    
    const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.keyCode || event.key;
        if (key === 13) {
            setLoaded(false)
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
        setLoaded(true)
        setCity(city)
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
                
                <Display  weather={weather} city={city} isLoaded={isLoaded}/>
            </main>
            <div className="search">
                <Sidebar  weather={weather} onEnterPress={onEnterPress} isLoaded={isLoaded}/>
                
            </div>
        </div>
        </div>
    );
}

export default App;
