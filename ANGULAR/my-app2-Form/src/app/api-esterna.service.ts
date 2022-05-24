import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEsternaService {

  constructor(private htpp: HttpClient) { }

  url = 'https://reqres.in/api';

  getData(){
    console.log(this.htpp.get(this.url + '/users')); //observable

   return this.htpp.get(this.url + '/users');
  }
}
