import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatiService } from '../dati.service';
import { Utente } from './utente.model';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {


  utenze: Utente[] = []


  constructor(private datiService: DatiService) {
   // datiService.scriviInConsole();
  //  datiService.condividiDati(); //chiamo un metodo che restituisce i dati
  console.log(datiService.utenze); //chiamo direttamente i dati
  this.datiService.aggiungiAccount("Dario Mennillo", "docente");
  this.datiService.modificaAccount(0, "Impiegato");
}

ngOnInit(): void {
  //se mi serve avere carico il dato "utenze", dichiarato sopra, posso nell'onInit asseganre un valore
  this.utenze = this.datiService.utenze;
  }

  onClickBtn(){
    this.datiService.scriviInConsole('Dario')
  }


  // onCreateAccount(nome: string, tipo: string){
  //   this.datiService.aggiungiAccount(nome, tipo);
  // }


  onCreateAccount(form: NgForm){
    this.datiService.aggiungiAccount(form.value.nome, form.value.tipo);
    console.log(form.value);
    form.reset()
   }


}
