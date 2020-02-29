import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from 'libs/data/interfaces';

import { CountryService } from '../../country.service';

@Component({
  selector: 'angular-reactive-examples-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
