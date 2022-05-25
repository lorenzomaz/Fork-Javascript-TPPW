export class Animale {
  id: number;
  nome: string;
  tipo: string;
  nomeAka: string;
  link ? : string;

  constructor(id: number, nome: string, tipo: string, nomeAka: string, link?: string){
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.link = link;
  }
}
