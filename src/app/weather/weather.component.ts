import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  // Placeholder data for now; this can be replaced with live API calls later
 currentTemp = 29;

  weatherInfo = {
    dayTemp: 32,
    nightTemp: 20,
    humidity: 30,
    windSpeed: 3
  };
}
