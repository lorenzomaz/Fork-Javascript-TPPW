import { Injectable } from '@angular/core';
import { Animale } from './animale.model';

@Injectable({
  providedIn: 'root'
})
export class AnimaliService {

  private animali: Animale[] = [
    {
      id: 1,
      nome: "Puma",
      tipo: "Mammifero",
      nomeAka: "Gennaro"
    },
    {
      id: 2,
      nome: "Giraffa",
      tipo: "Mammifero",
      nomeAka: "Eliah"
    },
    {
      id: 3,
      nome: "Elefante",
      tipo: "Mammifero",
      nomeAka: "Arturo"
    },
    {
      id: 4,
      nome: "Chupacabra",
      tipo: "Leggendario",
      nomeAka: "Miguel"
    },
    {
      id: 5,
      nome: "Gabbiano",
      tipo: "Uccelli",
      nomeAka: "Povero",
      link: "https://www.youtube.com/watch?v=zvNfGg5vKTs"
    }
  ]


  getAnimali(){
    return this.animali;
  }

  getAnimaleById(id: number){

    let animale = this.animali.find(
      (a) => {
        return a.id === id
      }
    )

    return animale;
  }


  constructor() { }
}
