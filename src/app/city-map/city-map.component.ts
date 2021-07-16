import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

import { WeatherService } from '../weather.service';


@Component({
  selector: 'city-map',
  templateUrl: './city-map.component.html',
  styleUrls: ['./city-map.component.scss']
})

export class CityMapComponent implements OnInit {

  currentWeather: any;
  constructor(private _weatherServise: WeatherService) { }

  ngOnInit(): void {
    this.currentWeather = this._weatherServise.currentWeather

    let loader = new Loader({
      apiKey: 'AIzaSyCawDz-TKGdLqMk-N7zZKrZRJxpfZKU32k',
      // language: 'en',
      
    });

    loader.load().then(() => {
      const currentMap = new google.maps.Map(document.querySelector('#city-map') as HTMLElement, {
        center: { lat: this.currentWeather.cityLat , lng: this.currentWeather.cityLng },
        zoom: 9,
        disableDefaultUI: true,
        draggable: false,
        styles: [
          {
            "stylers": [
              {
                "saturation": -45
              },
              {
                "lightness": 13
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#8fa7b3"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#667780"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#333333"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#8fa7b3"
              },
              {
                "gamma": 2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a3becc"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#7a8f99"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#555555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a3becc"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#7a8f99"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#555555"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#bbd9e9"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#525f66"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#bbd9e9"
              },
              {
                "gamma": 2
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a3aeb5"
              }
            ]
          }
        ]
      } as google.maps.MapOptions)
    })
  }
}
