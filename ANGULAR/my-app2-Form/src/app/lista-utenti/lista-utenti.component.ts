import { Component, Input, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { Utente } from '../utente/utente.model';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  // @Input() user: Utente;
  utenze: Utente[] = [];

  constructor(private datiService: DatiService) {

  }

  ngOnInit(): void {
    this.utenze = this.datiService.utenze
  }

}
