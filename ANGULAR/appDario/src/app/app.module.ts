import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerProvaComponent } from './server-prova/server-prova.component';
import { PrimoEsercizioComponent } from './primo-esercizio/primo-esercizio.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test12Component } from './test1/test12/test12.component';
import { Esercizio2Component } from './esercizio2/esercizio2.component';
import { Esercizio3Component } from './esercizio3/esercizio3.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    ServerComponent,
    ServersComponent,
    ServerProvaComponent,
    PrimoEsercizioComponent,
    Test1Component,
    Test2Component,
    Test12Component,
    Esercizio2Component,
    Esercizio3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
