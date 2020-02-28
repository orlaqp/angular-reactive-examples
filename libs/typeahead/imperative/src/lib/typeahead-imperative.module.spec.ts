import { async, TestBed } from '@angular/core/testing';
import { TypeaheadImperativeModule } from './typeahead-imperative.module';

describe('TypeaheadImperativeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TypeaheadImperativeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TypeaheadImperativeModule).toBeDefined();
  });
});
