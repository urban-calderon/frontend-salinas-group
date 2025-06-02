import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VoiceInputComponent } from './components/voice-input/voice-input.component';
import { ListeningIndicatorComponent } from './components/listening-indicator/listening-indicator.component';
import { VoiceRecognitionButtonComponent } from './components/voice-recognition-button/voice-recognition-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoiceInputComponent,
    ListeningIndicatorComponent,
    VoiceRecognitionButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
