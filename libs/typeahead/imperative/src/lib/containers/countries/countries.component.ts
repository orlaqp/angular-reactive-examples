import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../country.service';
import { Country } from 'libs/data/interfaces';

@Component({
  selector: 'angular-reactive-examples-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  private async = false;

  filteredCountries: Country[];
  selectedCountry: Country;

  constructor(private countryService: CountryService) { }

  onCriteriaChanged(criteria: string) {
    if (this.async)
      this.countryService.filterAsync(criteria)
        .then(countries => this.filteredCountries = countries);
    else
      this.filteredCountries = this.countryService.filter(criteria);
  }

  onSelectedCountry(country: Country) {
    this.selectedCountry = country;
  }

}
