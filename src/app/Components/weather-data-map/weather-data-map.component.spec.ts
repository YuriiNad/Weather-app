import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataMapComponent } from './weather-data-map.component';

describe('WeatherDataMapComponent', () => {
  let component: WeatherDataMapComponent;
  let fixture: ComponentFixture<WeatherDataMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDataMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
