export class WeatherItem {
    constructor(
        public cityName: string, 
        public countryIndex: string, 
        public cityTemperature: number, 
        public weatherIcon: any, 
        public weatherDescription: string,
        public cityPressure: string,
        public cityFeelsLike: string|number,
        public cityHumidity: number,
        public cityLat: number,
        public cityLng: number,
    ){}
}
