import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './Pages/weather-search/weather-search.component';
import { WeatherWidgetMapComponent } from './Pages/weather-widget-map/weather-widget-map.component';
import { WeatherWidgetComponent } from './Pages/weather-widget/weather-widget.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'weatherSearch', pathMatch: 'full'},
  {path:'weatherSearch', component: WeatherSearchComponent},
  {path: 'cityWeather1', component: WeatherWidgetComponent},
  {path: 'cityWeather2', component: WeatherWidgetMapComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
