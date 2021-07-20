import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherSearchComponent } from './Pages/weather-search/weather-search.component';
import { WeatherWidgetComponent } from './Pages/weather-widget/weather-widget.component';

import { DateTimeComponent } from '../app/Components/date-time/date-time.component'
import { WeatherDataComponent } from '../app/Components/weather-data/weather-data.component';
import { PercentagePipe } from './Pipelines/percentage.pipe';
import { FrirstLatUpperPipe } from './Pipelines/frirst-lat-upper.pipe';
import { AlertsComponent } from './Components/alerts/alerts.component';
import { WeatherWidgetMapComponent } from './Pages/weather-widget-map/weather-widget-map.component';
import { WeatherDataMapComponent } from './Components/weather-data-map/weather-data-map.component';
import { WeatherAdditionalDataComponent } from '../app/Components/weather-additional-data/weather-additional-data.component';
import { CityMapComponent } from './Components/city-map/city-map.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherWidgetComponent,
    WeatherDataComponent,
    DateTimeComponent,
    PercentagePipe,
    FrirstLatUpperPipe,
    AlertsComponent,
    WeatherWidgetMapComponent,
    WeatherDataMapComponent,
    WeatherAdditionalDataComponent,
    CityMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AlertsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
