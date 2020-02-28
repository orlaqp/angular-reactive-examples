import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './containers/countries/countries.component';
import { MaterialModule } from '@angular-reactive-examples/material';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    RouterModule.forChild([
      {path: '', component: CountriesComponent}
    ])
  ],
  declarations: [CountriesComponent, SearchResultComponent, CountryDetailsComponent, SearchComponent]
})
export class TypeaheadImperativeModule {}
