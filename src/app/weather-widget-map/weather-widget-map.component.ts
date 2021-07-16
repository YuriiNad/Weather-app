import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-widget-map',
  templateUrl: './weather-widget-map.component.html',
  styleUrls: ['./weather-widget-map.component.scss']
})
export class WeatherWidgetMapComponent implements OnInit {
  currentCityWeather: any;

  constructor(private _weatherServise: WeatherService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.currentCityWeather = this._weatherServise.currentWeather
  }

  back(): void {
    this._router.navigateByUrl('/weatherSearch')
  }
}
