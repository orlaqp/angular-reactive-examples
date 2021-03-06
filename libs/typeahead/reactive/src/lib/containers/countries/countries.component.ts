import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'libs/data/interfaces';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';

import { CountryService } from '../../country.service';

@Component({
  selector: 'angular-reactive-examples-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  public criteriaControl = new FormControl('');

  private selectedCountry = new BehaviorSubject<Country>(null);

  countries$ = this.criteriaControl.valueChanges.pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(criteria => this.countryService.searchAsync(criteria))
  );

  vm$ = combineLatest([this.countries$, this.selectedCountry]).pipe(
    map(([countries, selectedCountry]) => ({ countries, selectedCountry }))
  );

  constructor(private countryService: CountryService) {}

  onSelectedCountry(country: Country) {
    this.selectedCountry.next(country);
  }
}
