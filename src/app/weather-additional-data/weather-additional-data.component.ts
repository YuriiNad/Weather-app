import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'weather-additional-data',
  templateUrl: './weather-additional-data.component.html',
  styleUrls: ['./weather-additional-data.component.scss']
})

export class WeatherAdditionalDataComponent implements OnInit {
  @Input() currentCityWeather!: WeatherItem;
  weatherIcon: any;

  constructor () {}

  ngOnInit(): void {}
}
