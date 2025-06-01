import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public maxLength: number = 15;

  nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
    Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]*$/)
  ]);

  get charCount(): number {
    return this.nameControl.value?.length || 0;
  }

  emitName(): void {
    if (this.nameControl.valid) {
      console.log('Nombre válido:', this.nameControl.value);
    } else {
      console.log('no valido')
      this.nameControl.markAsTouched();
    }
  }

  getErrorMessage(): string {
    if (this.nameControl.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (this.nameControl.hasError('maxlength')) {
      return `Máximo ${this.maxLength} caracteres`;
    }
    if (this.nameControl.hasError('pattern')) {
      return 'Solo se permiten carácteres alfanuméricos';
    }
    return '';
  }

}
