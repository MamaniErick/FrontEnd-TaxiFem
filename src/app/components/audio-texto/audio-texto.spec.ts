import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTexto } from './audio-texto';

describe('AudioTexto', () => {
  let component: AudioTexto;
  let fixture: ComponentFixture<AudioTexto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioTexto],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioTexto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
