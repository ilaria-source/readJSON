import { Component } from '@angular/core';

import countries from './_files/countries.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readJSON';
  countryList:{name: string, code: string}[]=countries;
}
