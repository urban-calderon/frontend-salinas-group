import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';
import { EncryptService } from '../../services/encrypt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePage {

  public maxLength: number = 15;
  public isRecording = false;

  nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
    Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]*$/)
  ]);

  constructor(
    public voiceRecognitionService:VoiceRecognitionService,
    private encryptService: EncryptService,
    private router: Router
  ) {
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
      const name = this.nameControl.value;
      this.sendName(name!);
      this.nameControl.reset();
    } else {
      this.nameControl.markAsTouched();
    }
  }

  sendName(name: string) {
    this.encryptService.sendData(name).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.encryptedText) {
          //TODO: redirigir a la ruta "encrypt" y que el componente EncryptPage muestre el texto encriptado
          this.router.navigate(['/encrypt'], {
            state: { encryptedText: response.encryptedText }
          });
          console.log('Texto encriptado:', response.encryptedText);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
}
