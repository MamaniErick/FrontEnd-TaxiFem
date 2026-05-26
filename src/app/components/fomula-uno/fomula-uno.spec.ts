import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomulaUno } from './fomula-uno';

describe('FomulaUno', () => {
  let component: FomulaUno;
  let fixture: ComponentFixture<FomulaUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomulaUno],
    }).compileComponents();

    fixture = TestBed.createComponent(FomulaUno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
