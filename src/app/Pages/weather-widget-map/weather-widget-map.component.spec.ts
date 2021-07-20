import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetMapComponent } from './weather-widget-map.component';

describe('WeatherWidgetMapComponent', () => {
  let component: WeatherWidgetMapComponent;
  let fixture: ComponentFixture<WeatherWidgetMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWidgetMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
