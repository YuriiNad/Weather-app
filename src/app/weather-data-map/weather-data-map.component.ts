import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'weather-data-map',
  templateUrl: './weather-data-map.component.html',
  styleUrls: ['./weather-data-map.component.scss']
})

export class WeatherDataMapComponent implements OnInit {
  @Input() currentCityWeather!: WeatherItem;
  weatherIcon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
