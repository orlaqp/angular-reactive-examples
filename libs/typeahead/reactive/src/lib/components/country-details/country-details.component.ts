import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from 'libs/data/interfaces';

@Component({
  selector: 'angular-reactive-examples-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsComponent {
  @Input()
  country: Country;
}
