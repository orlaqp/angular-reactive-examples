import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './containers/countries/countries.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', component: CountriesComponent}
    ])
  ],
  declarations: [CountriesComponent]
})
export class TypeaheadReactiveModule {}
