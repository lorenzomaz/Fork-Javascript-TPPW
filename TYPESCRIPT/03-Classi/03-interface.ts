//Non esiste in JS Vanilla
//Le interfacce sono la definizione del TIPO DELL'OGGETTO
//definisco le caretteristiche comuni a tutti gli oggetti di questo tipo
interface Umano{
    nome: string;
    cognome: string;
    eta: number;

    saluta: (value: string) => string;
}


let studente1: Umano;

studente1 = {
    nome: "Elliott",
    cognome: "Migotti",
    eta: 28,
    saluta(){
        return "Ciao a tutti";
    }
}

class Studente implements Umano{
    nome: string;
    cognome: string;
    eta: number;
    
    constructor(nome: string, cognome: string, eta: number){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    saluta(value: string): string{
        return "ciao a tutti quanti specialmente a : " + value;
    }
}

let elliott2 = new Studente("Elliott", "Migotti", 28);

console.log(elliott2.saluta('Mimmo'));