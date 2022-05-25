import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AboutComponent } from './about/about.component';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContattoComponent } from './contatti/contatto/contatto.component';
import { AnimaliComponent } from './animali/animali.component';
import { AnimaleComponent } from './animali/animale/animale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContattiComponent,
    AboutComponent,
    IscrizioneComponent,
    PageNotFoundComponent,
    ContattoComponent,
    AnimaliComponent,
    AnimaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
