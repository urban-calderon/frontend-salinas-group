import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-voice-input',
  standalone: false,
  templateUrl: './voice-input.component.html',
  styleUrl: './voice-input.component.css'
})
export class VoiceInputComponent {
  @Input() control!: FormControl;
  @Input() maxLength!: number;
  @Input() placeholder: string = '';
  @Input() isRecording: boolean = false;
  @Output() submitMessage = new EventEmitter<void>();

  get charCount(): number {
    return this.control.value?.length || 0;
  }

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (this.control.hasError('maxlength')) {
      return `Máximo ${this.maxLength} caracteres`;
    }
    if (this.control.hasError('pattern')) {
      return 'Solo se permiten carácteres alfanuméricos';
    }
    return '';
  }
}
