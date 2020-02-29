import { Injectable } from '@angular/core';
import { Country } from '../../../../data/interfaces';
import { countries } from '../../../../data/countries';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private criteriaSubject = new BehaviorSubject<string>('');
  private selectedCountrySubject = new Subject<Country>();

  filteredCountries$ = this.criteriaSubject.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(criteria => this.searchAsync(criteria))
  );

  countryVM$ = combineLatest([
    // this.filteredCountries$,
    this.selectedCountrySubject.asObservable()
  ]).pipe(
    map(([ filteredCountries ]) => {
      return { filteredCountries };
    })
  );
  // countryVM$ = combineLatest([
  //   this.filteredCountries$,
  //   this.selectedCountrySubject.asObservable()
  // ]).pipe(
  //   map(([ filteredCountries, selectedCountry ]) => {
  //     return { filteredCountries, selectedCountry };
  //   })
  // );

  public updateCriteria(criteria: string) {
    this.criteriaSubject.next(criteria);
  }

  public updateSelectedCountry(country: Country) {
    this.selectedCountrySubject.next(country);
  }

  public searchAsync(criteria: string): Observable<Country[]> {
    const delay = Math.floor(Math.random() * 3);

    return new Observable(subscriber => {
      const filteredCountries = this.filter(criteria);
      setTimeout(() => subscriber.next(filteredCountries), delay * 1000);
    });
  }

  private filter(criteria: string): Country[] {
    return countries.filter(c => c.name.official.toLowerCase().includes(criteria.toLowerCase()));
  }

}
