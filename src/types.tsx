export interface WeatherProps {
    cloudcover: number,
    humidity: number,
    time: string,
    precip: number,
    pressure: number,
    temperature: number,
    visibility: number,
    description: string[],
    icons: string[],
    windSpeed: number
}

export interface SidebarProps {
    weather: WeatherProps,
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}