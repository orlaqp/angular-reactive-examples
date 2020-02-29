import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'libs/data/interfaces';

@Component({
  selector: 'angular-reactive-examples-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input()
  countries: Country[];

  @Output()
  selectedCountry = new EventEmitter<Country>();

  selectCountry(country: Country) {
    this.selectedCountry.emit(country);
  }
}
