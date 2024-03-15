import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAnKM1eVUhhYcHNuGh7tMznv4nSyUE8XAg",
  authDomain: "cassandravf-b94dd.firebaseapp.com",
  projectId: "cassandravf-b94dd",
  storageBucket: "cassandravf-b94dd.appspot.com",
  messagingSenderId: "130670187889",
  appId: "1:130670187889:web:efe74448a64688e6d692d0"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
