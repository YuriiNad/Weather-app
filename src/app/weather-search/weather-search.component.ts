import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';


@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent implements OnInit {
  public isDisabled = false;
  constructor(private _weatherServise: WeatherService, private router: Router) { }

  submit(cityName:string) {
    this._weatherServise.searchWeatherData(cityName);

    setTimeout(():void => {
      this.isDisabled = this._weatherServise.isDisabled;
    }, 300);
  }

  redirect(option: number): void {
    const url = '/cityWeather' + option;
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
  }
}
