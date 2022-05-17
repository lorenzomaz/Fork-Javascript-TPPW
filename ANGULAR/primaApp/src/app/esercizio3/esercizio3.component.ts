import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio3',
  templateUrl: './esercizio3.component.html',
  styleUrls: ['./esercizio3.component.css']
})
export class Esercizio3Component implements OnInit {

  mostraDet = false;
  log = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  onMostraDet(){
    this.mostraDet = !this.mostraDet;
    this.log.push(this.log.length + 1);
  }
}
