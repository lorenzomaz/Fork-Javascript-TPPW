import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IscrizioneUserService {

  private contatti = []


  aggiungiContatto(contatto: {id: number, nome: string, mail: string}){
    this.contatti.push(contatto);
  }

  getContatti(){
    return this.contatti;
  }

  constructor() { }
}
