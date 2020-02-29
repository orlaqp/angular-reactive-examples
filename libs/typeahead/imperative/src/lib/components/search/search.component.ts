import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'angular-reactive-examples-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output()
  criteriaChanged = new EventEmitter();

  public criteria: string;

  onCriteriaChanged(criteria: string) {
    this.criteriaChanged.emit(criteria);
  }

}
