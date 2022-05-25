import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//IMPORT fondamentali per la route
import { AboutComponent } from './about/about.component';
import { AnimaleComponent } from './animali/animale/animale.component';
import { AnimaliComponent } from './animali/animali.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ContattoComponent } from './contatti/contatto/contatto.component';
import { HomeComponent } from './home/home.component';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //specifico i path delle mie singolo routes
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'iscrizione', component: IscrizioneComponent},
  {path: 'contatti', component: ContattiComponent, children:[
    {path: ':id/:nome', component: ContattoComponent},
  ]},
  {path: 'animali', component: AnimaliComponent, children:[
    {path: ':id', component: AnimaleComponent}
  ]},
  //specifico la wildcard SOLO al fondo della mia route
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
