import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {


  contatto: {
    id: number,
    nome: string
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.contatto = {
      id: this.route.snapshot.params['id'],
      nome: this.route.snapshot.params['nome']
    }

    this.route.params
    .subscribe(
      (params: Params) =>{
        this.contatto.id = params['id'];
        this.contatto.nome = params['nome']
      }
    );

  }

}
