import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  public recognition = new webkitSpeechRecognition();
  public isStoppedSpeechRecog = false;
  public tempWords: string = '';
  public text: string = '';

  constructor() {
    this.recognition.lang = 'es-MX';
    this.recognition.interimResults = true;
  }

  init() {
    this.recognition.addEventListener('result', (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Inicio de reconociemiento de voz');

    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('Fin de reconocimiento de voz servicio');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('Fin de reconocimiento de voz');
  }

  private wordConcat() {
    this.text = `${this.tempWords}`;
    this.tempWords = '';
  }
}
