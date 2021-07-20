import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAdditionalDataComponent } from './weather-additional-data.component';

describe('WeatherAdditionalDataComponent', () => {
  let component: WeatherAdditionalDataComponent;
  let fixture: ComponentFixture<WeatherAdditionalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAdditionalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
