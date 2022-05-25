import { Component, OnInit } from '@angular/core';
import { ApiEsternaService } from '../api-esterna.service';

@Component({
  selector: 'app-api-est',
  templateUrl: './api-est.component.html',
  styleUrls: ['./api-est.component.css']
})
export class ApiEstComponent implements OnInit {

  dati: any;

  constructor(private apiService: ApiEsternaService) {

    //sto ricevendo degli Observable, cioè dei dati cui sono obbligato a fare il subscribe
    this.apiService.getData()
    .subscribe(data => {

          this.dati = data;

        });
   }

  ngOnInit(): void {
  }

}
