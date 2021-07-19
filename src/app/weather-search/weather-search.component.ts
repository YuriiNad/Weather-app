import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';


@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent implements OnInit {
  public isDisabled = true;
  constructor(private _weatherServise: WeatherService, private router: Router) {}

  submit(cityName:string) {
    this._weatherServise.searchWeatherData(cityName)
    .subscribe(() => {
     this.isDisabled = false
    })
  }

  redirect(option: number): void {
    const url = '/cityWeather' + option;
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {}
}
