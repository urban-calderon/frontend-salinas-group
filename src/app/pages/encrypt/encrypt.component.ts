import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'encrypt-page',
  standalone: false,
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.css'
})
export class EncryptPage {

  public encryptedText: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.encryptedText = navigation?.extras.state?.['encryptedText'] || '';
  }

}
