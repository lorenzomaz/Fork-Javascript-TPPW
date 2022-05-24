import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { ApiEstComponent } from './api-est/api-est.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    ListaUtentiComponent,
    ApiEstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
