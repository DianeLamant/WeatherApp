import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: "",
    component: WeatherComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
