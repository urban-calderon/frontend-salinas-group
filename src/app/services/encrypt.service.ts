import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncryptRequest, EncryptResponse } from '../interfaces/encrypt.interface';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  private serviceUrl: string = 'https://backend-salinas-group.onrender.com/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient ) {
    console.log('Encrypt service ready!')
  }

  sendData(text: string): Observable<EncryptResponse> {
    const endpoint = `${this.serviceUrl}/encrypt`;
    const body: EncryptRequest = { text };
    return this.http.post<EncryptResponse>(endpoint, body, this.httpOptions);
  }
}
