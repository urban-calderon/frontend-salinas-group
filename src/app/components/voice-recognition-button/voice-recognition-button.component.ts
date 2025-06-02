import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voice-recognition-button',
  standalone: false,
  templateUrl: './voice-recognition-button.component.html',
  styleUrl: './voice-recognition-button.component.css'
})
export class VoiceRecognitionButtonComponent {
  @Output() startRecording = new EventEmitter<void>();
}
