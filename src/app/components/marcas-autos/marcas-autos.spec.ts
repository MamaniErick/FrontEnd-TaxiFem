import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAutos } from './marcas-autos';

describe('MarcasAutos', () => {
  let component: MarcasAutos;
  let fixture: ComponentFixture<MarcasAutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasAutos],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasAutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
