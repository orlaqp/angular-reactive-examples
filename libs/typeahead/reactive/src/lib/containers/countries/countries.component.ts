import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'libs/data/interfaces';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap, startWith, map } from 'rxjs/operators';

import { CountryService } from '../../country.service';

@Component({
  selector: 'angular-reactive-examples-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
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

  ngOnInit(): void {
    this.onSelectedCountry(null);
  }

  onSelectedCountry(country: Country) {
    this.selectedCountry.next(country);
  }

  // private selectedCountry = new BehaviorSubject<Country>(null);
  // public selectedCountry$ = this.selectedCountry.asObservable();

  // public vm$;

  // // vm2 = this.vm$.pipe(
  // //   tap(_ => {
  // //     debugger;
  // //     console.log(_);
  // //   })
  // // ).subscribe();


  // // public vm$ = combineLatest([
  // //   this.criteriaControl.valueChanges.pipe(startWith('')),
  // //   this.countryService.filteredCountries$
  // // ]).pipe(
  // //   tap(_ => console.log('YESSS'))
  // // );

  // constructor(private countryService: CountryService) {

  // }

  // ngOnInit(): void {
  //   this.vm$ = this.countryService.countryVM$;

  //   this.vm$.pipe(
  //     tap(_ => {
  //       debugger;
  //       console.log(_);
  //     })
  //   ).subscribe();

  //   this.selectedCountry.next({ name: 'NAME' } as any);

  //   this.countryService.updateSelectedCountry({} as any);
  //   // this.criteriaControl.valueChanges.pipe(
  //   //   // startWith(''),
  //   //   tap(val => {
  //   //     debugger;
  //   //     this.countryService.updateCriteria(val)
  //   //   })
  //   // ).subscribe();
  // }

  // // onSelectedCountry(country: Country) {
  // //   this.selectedCountry.next(country);
  // // }

}
