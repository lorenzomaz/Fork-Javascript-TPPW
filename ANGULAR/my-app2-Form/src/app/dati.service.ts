import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DatiService {

  scriviInConsole(parola: string){
    console.log("Ciao " + parola);
  }

 utenze = [
   {
     nome: "Pippo Rossi",
     tipo: "Amministratore"
   },
   {
     nome: "Carla Bianchi",
     tipo: "Amministratore"
   },
   {
     nome: "Mario Verdi",
     tipo: "Impiegato"
   },
   {
     nome: "Anna Gialli",
     tipo: "Dirigente"
   }
 ];

 condividiDati(){
   console.log(this.utenze);
 }

 aggiungiAccount(nome:string, tipo:string){
   this.utenze.push({nome: nome, tipo: tipo})
 }

 modificaAccount(id: number, tipo: string){
   this.utenze[id].tipo = tipo
 }
}
