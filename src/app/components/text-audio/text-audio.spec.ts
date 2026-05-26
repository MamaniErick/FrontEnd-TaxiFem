import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAudio } from './text-audio';

describe('TextAudio', () => {
  let component: TextAudio;
  let fixture: ComponentFixture<TextAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAudio],
    }).compileComponents();

    fixture = TestBed.createComponent(TextAudio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
