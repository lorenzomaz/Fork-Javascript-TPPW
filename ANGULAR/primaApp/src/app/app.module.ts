import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerProvaComponent } from './server-prova/server-prova.component';
import { PrimoEsercizioComponent } from './primo-esercizio/primo-esercizio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    ServerComponent,
    ServersComponent,
    ServerProvaComponent,
    PrimoEsercizioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
