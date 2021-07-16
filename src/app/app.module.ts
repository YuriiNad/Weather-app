import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { PercentagePipe } from './pipelines/percentage.pipe';
import { FrirstLatUpperPipe } from './pipelines/frirst-lat-upper.pipe';
import { AlertsComponent } from './alerts/alerts.component';
import { WeatherWidgetMapComponent } from './weather-widget-map/weather-widget-map.component';
import { WeatherDataMapComponent } from './weather-data-map/weather-data-map.component';
import { WeatherAdditionalDataComponent } from './weather-additional-data/weather-additional-data.component';
import { CityMapComponent } from './city-map/city-map.component';


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
