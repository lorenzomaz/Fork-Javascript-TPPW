import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.css']
})
export class PrimoComponentComponent implements OnInit {

  nomeComponent = 'Mio primo component';
  numeroComponent = 1;

  //construttore viene chiamato quando viene creato il Component
  constructor() { }

  //viene lanciato quando viene caricata la pagina
  ngOnInit(): void {

  }

}
