export default interface WeatherProps {
    cloudcover?: number,
    humidity?: number,
    time?: string,
    precip?: number,
    pressure?: number,
    temperature?: number,
    visibility?: number,
    description?: string[],
    icons?: string[],
    windSpeed?: number
}

export default interface DisplayProps {
    weather: WeatherProps | {}
}