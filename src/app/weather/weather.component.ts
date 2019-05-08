import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  imgWeather = {
    Clear: "assets/img/003-sun.svg",
    Clouds: "assets/img/001-cloud.svg",
    Rain: "assets/img/016-rainy-1.svg",
    Snow: "assets/img/010-snowy.svg",
    Thunderstorm: "assets/img/012-storm-1.svg",
    Drizzle: "assets/img/007-rainy.svg",
  }

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe();
  }

}
