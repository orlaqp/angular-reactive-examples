import { Injectable } from '@angular/core';
import { Country } from '../../../../data/interfaces';
import { countries } from '../../../../data/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  filter(criteria: string): Country[] {
    return countries.filter(c => c.name.official.toLowerCase().includes(criteria.toLowerCase()));
  }

  searchAsync(criteria: string): Promise<Country[]> {
    const delay = Math.floor(Math.random() * 3);

    return new Promise((resolve, reject) => {
      const filteredCountries = this.filter(criteria);
      setTimeout(() => resolve(filteredCountries), delay * 1000)
    });
  }

}
