import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { countries } from '../../../../data/countries';
import { Country } from '../../../../data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public searchAsync(criteria: string): Observable<Country[]> {
    console.log(`Sending request for: ${criteria}`);

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
