import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { VoiceInputComponent } from './components/voice-input/voice-input.component';
import { ListeningIndicatorComponent } from './components/listening-indicator/listening-indicator.component';
import { VoiceRecognitionButtonComponent } from './components/voice-recognition-button/voice-recognition-button.component';
import { EncryptPage } from './pages/encrypt/encrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    EncryptPage,
    VoiceInputComponent,
    ListeningIndicatorComponent,
    VoiceRecognitionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
