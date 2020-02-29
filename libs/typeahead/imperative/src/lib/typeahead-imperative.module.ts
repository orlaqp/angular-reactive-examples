import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './containers/countries/countries.component';
import { MaterialModule } from '@angular-reactive-examples/material';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,

    RouterModule.forChild([
      {path: '', component: CountriesComponent}
    ])
  ],
  declarations: [CountriesComponent, SearchResultComponent, CountryDetailsComponent]
})
export class TypeaheadImperativeModule {}
