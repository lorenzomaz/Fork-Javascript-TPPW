import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//IMPORT fondamentali per la route
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //specifico i path delle mie singolo routes
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'iscrizione', component: IscrizioneComponent},
  {path: 'contatti', component: ContattiComponent},

  //specifico la wildcard SOLO al fondo della mia route
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
