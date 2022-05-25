import { Component, OnInit } from '@angular/core';
import { AnimaliService } from './animali.service';

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent implements OnInit {

  public animali: {
    id: number,
    nome: string,
    tipo: string,
    nomeAka: string
  }[];

  constructor(private animaliService: AnimaliService) { }

  ngOnInit(): void {
    this.animali = this.animaliService.getAnimali();
  }

}
