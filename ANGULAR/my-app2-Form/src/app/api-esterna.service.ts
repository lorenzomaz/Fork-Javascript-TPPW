import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiEsternaService {

  constructor(private http: HttpClient) { }

  url = 'https://reqres.in/api';

  getData(){
    console.log(this.http.get(this.url + '/users')); //observable
   return this.http.get(this.url + '/users');
  }
}
