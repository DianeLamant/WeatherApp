import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city, countryCode) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${environment.api_key}&units=metric `)
  }
}
