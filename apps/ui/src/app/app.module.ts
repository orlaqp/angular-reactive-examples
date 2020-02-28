import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'typeahead/imperative',
          loadChildren: () =>
            import('@angular-reactive-examples/typeahead/imperative').then(
              module => module.TypeaheadImperativeModule
            )
        },
        {
          path: 'typeahead/reactive',
          loadChildren: () =>
            import('@angular-reactive-examples/typeahead/reactive').then(
              module => module.TypeaheadReactiveModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
