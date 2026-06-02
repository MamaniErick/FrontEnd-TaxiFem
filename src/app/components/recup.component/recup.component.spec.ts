import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupComponent } from './recup.component';

describe('RecupComponent', () => {
  let component: RecupComponent;
  let fixture: ComponentFixture<RecupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
