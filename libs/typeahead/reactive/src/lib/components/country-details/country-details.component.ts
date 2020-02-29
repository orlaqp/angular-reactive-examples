import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'libs/data/interfaces';

@Component({
  selector: 'angular-reactive-examples-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  @Input()
  country: Country;
}
