import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city: string = "Grenoble";
  countryCode: string = "fr";
  weatherData: any;
  sunrise: Date;
  sunset: Date;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${environment.api_key}&units=metric`).subscribe((apiData) => {
        this.weatherData = apiData;
        console.log(this.weatherData);
        this.sunrise = new Date(this.weatherData.sys.sunrise * 1000);
        this.sunset = new Date(this.weatherData.sys.sunset * 1000);
        observer.next();
      })
    });
  }
}
