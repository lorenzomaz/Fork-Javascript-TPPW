import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  contatti = [
    {
      id: 1,
      nome: "Pippo",
      cognome: "Qualcosa"
    },
    {
      id: 2,
      nome: "Mario",
      cognome: "Rossi"
    },
    {
      id: 3,
      nome: "Anna",
      cognome: "Bianchi"
    },
    {
      id: 4,
      nome: "Paolo",
      cognome: "Verdi"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
