import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEleccion } from './api-eleccion';

describe('ApiEleccion', () => {
  let component: ApiEleccion;
  let fixture: ComponentFixture<ApiEleccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEleccion],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiEleccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
