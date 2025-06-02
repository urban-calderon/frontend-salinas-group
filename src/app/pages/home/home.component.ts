import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public maxLength: number = 15;
  public isRecording = false;

  nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
    Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]*$/)
  ]);

  constructor(public voiceRecognitionService:VoiceRecognitionService) {
    this.voiceRecognitionService.init()
  }

  startRecording() {
    this.voiceRecognitionService.start();
    this.isRecording = true;
  }

  stopRecording() {
    this.voiceRecognitionService.stop();
    const currentValue = this.nameControl.value || '';
    this.nameControl.setValue(currentValue + this.voiceRecognitionService.text);
    this.voiceRecognitionService.text = '';
    this.isRecording = false;
  }

  cancelRecording() {
    this.voiceRecognitionService.stop();
    this.voiceRecognitionService.text = '';
    this.isRecording = false;
  }

  submitMessage() {
    if (this.nameControl.valid) {
      console.log('Nombre enviado: ', this.nameControl.value);
      // TODO: enviar el valor al servicio
      this.nameControl.reset();
    } else {
      this.nameControl.markAsTouched();
    }
  }
}
