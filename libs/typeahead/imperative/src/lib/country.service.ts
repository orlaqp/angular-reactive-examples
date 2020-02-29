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

  filterAsync(criteria: string): Promise<Country[]> {
    console.log(`Sending request for: ${criteria}`);

    const delay = Math.floor(Math.random() * 2);

    return new Promise((resolve, reject) => {
      const filteredCountries = this.filter(criteria);
      setTimeout(() => {
        console.log(`Got results for: ${criteria}`);
        resolve(filteredCountries)
      }, delay * 1000)
    });
  }

}
