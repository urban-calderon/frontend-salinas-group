import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRecognitionButtonComponent } from './voice-recognition-button.component';

describe('VoiceRecognitionButtonComponent', () => {
  let component: VoiceRecognitionButtonComponent;
  let fixture: ComponentFixture<VoiceRecognitionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoiceRecognitionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceRecognitionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
