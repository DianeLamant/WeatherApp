import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
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

  constructor(private weatherService: WeatherService, private router: Router) { }

  @Input() city: string;
  @ViewChild('search') searchInput: ElementRef;
  fixedOptions: any;
  reconfigurableOptions: any;

  countryCode = 'fr';

  ngOnInit() {
    console.log(this.searchInput);
    this.fixedOptions = {
      appId: 'plE0QF0DLP5A',
      apiKey: '0dfaa5f4de155621e4768eaffb242252',
      container: this.searchInput.nativeElement,
      style: false,
      debug: true
    };
    this.reconfigurableOptions = {
      language: 'fr',
      type: 'city',
    };
    var placesInstance = places(this.fixedOptions).configure(this.reconfigurableOptions);

    if (this.city) {
      this.fixedOptions.setVal(this.city);
    }

    placesInstance.on('change', (e) => {
      console.log(e);

      this.city = e.suggestion.country;
      this.countryCode = e.suggestion.countryCode;
      console.log(this.weatherService);

      this.weatherService.getWeather(this.city, this.countryCode).subscribe(
        (apiData) => {
          let data = apiData;
          console.log(data);

        }
      )
      this.router.navigate([''])
    });



  }



}
