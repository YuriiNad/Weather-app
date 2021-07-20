import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../../weather-item';

@Component({
  selector: 'weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})

export class WeatherDataComponent implements OnInit {
  @Input() currentCityWeather!: WeatherItem;
  weatherIcon: any;

  constructor () {}

  ngOnInit(): void {}
}
