import { async, TestBed } from '@angular/core/testing';
import { TypeaheadReactiveModule } from './typeahead-reactive.module';

describe('TypeaheadReactiveModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TypeaheadReactiveModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TypeaheadReactiveModule).toBeDefined();
  });
});
