import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './containers/countries/countries.component';
import { MaterialModule } from '@angular-reactive-examples/material';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {path: '', component: CountriesComponent}
    ])
  ],
  declarations: [CountriesComponent, CountryDetailsComponent, SearchResultComponent]
})
export class TypeaheadReactiveModule {}
