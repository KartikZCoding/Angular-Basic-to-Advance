import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrouping } from './form-grouping';

describe('FormGrouping', () => {
  let component: FormGrouping;
  let fixture: ComponentFixture<FormGrouping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGrouping],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGrouping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
