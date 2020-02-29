import { Injectable } from '@angular/core';
import { Country } from '../../../../data/interfaces';
import { countries } from '../../../../data/countries';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public searchAsync(criteria: string): Observable<Country[]> {
    const delay = Math.floor(Math.random() * 2);

    return new Observable(subscriber => {
      const filteredCountries = this.filter(criteria);
      setTimeout(() => subscriber.next(filteredCountries), delay * 1000);
    });
  }

  private filter(criteria: string): Country[] {
    return countries.filter(c => c.name.official.toLowerCase().includes(criteria.toLowerCase()));
  }

}
