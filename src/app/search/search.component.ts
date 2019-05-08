import { Component, OnInit, ViewChild } from '@angular/core';
import { places } from '../../../node_modules/places.js/dist/cdn/places.js';
import { ElementRef } from '@angular/core';
declare let places: any;
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('search') searchInput: ElementRef;
  fixedOptions: any;
  reconfigurableOptions: any;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
    console.log(this.searchInput);
    this.fixedOptions = {
      appId: 'plE0QF0DLP5A',
      apiKey: '0dfaa5f4de155621e4768eaffb242252',
      container: this.searchInput.nativeElement,
      style: true,
      debug: true
    };
    this.reconfigurableOptions = {
      language: 'fr',
      type: 'city',
    };
    const placesInstance = places(this.fixedOptions).configure(this.reconfigurableOptions);

    placesInstance.on('change', (e) => {
      console.log(e);

      this.weatherService.city = e.suggestion.name;
      this.weatherService.countryCode = e.suggestion.countryCode;
      console.log(this.weatherService);

      this.weatherService.getWeather().subscribe(() => {
        this.router.navigate(['']);
      });
    });
  }



}



