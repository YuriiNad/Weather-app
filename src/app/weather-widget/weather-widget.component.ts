import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html', 
  styleUrls: ['./weather-widget.component.scss']
})

export class WeatherWidgetComponent implements OnInit {
  currentCityWeather: any;

  constructor(private _weatherServise: WeatherService, private _router: Router) {}
  
  ngOnInit(): void {
    this.currentCityWeather = this._weatherServise.currentWeather
  }

  back(): void {
    this._router.navigateByUrl('/weatherSearch')
  }
}
