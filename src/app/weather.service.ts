import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import {  HttpClient} from '@angular/common/http';
import { WeatherItem } from './weather-item';

import { AlertsComponent } from './alerts/alerts.component'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private appId: string = '&appid=8c11b9f0aba5f87af6fee00297f1a0f2';
  private currentCityWeather!: WeatherItem;

  public isDisabled!: boolean;

  constructor(private _http: HttpClient, private _alerts:AlertsComponent) {}

  searchWeatherData(cityName: string): any {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}${this.appId}&units=metric`)
    .pipe (
      catchError(error=> {
        this.getAlert()
        return error;
      }),
      map((data:any)=> {
        this.currentCityWeather = {
          cityName: data.name,
          countryIndex: data.sys['country'],
          cityTemperature:data.main['temp'],
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`,
          weatherDescription: data.weather[0]['description'],
          cityPressure: data.main['pressure'],
          cityFeelsLike: data.main['feels_like'],
          cityHumidity: data.main['humidity'],
          cityLat: data.coord['lat'],
          cityLng: data.coord['lon'],
        };
      })
    )
  }

  get currentWeather() {
    return this.currentCityWeather;
  }

  getAlert():void {
    this._alerts.erroalert();
  }
}
