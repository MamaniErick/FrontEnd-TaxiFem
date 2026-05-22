import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAudio } from './texto-audio';

describe('TextoAudio', () => {
  let component: TextoAudio;
  let fixture: ComponentFixture<TextoAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoAudio],
    }).compileComponents();

    fixture = TestBed.createComponent(TextoAudio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
