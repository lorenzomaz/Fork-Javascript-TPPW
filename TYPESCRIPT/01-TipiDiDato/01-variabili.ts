// Primitive: Number, Boolean, String
// Complesse: Array, Object
//Funzioni e metodi

let numero = 9; //il tipo può essere omesso

let eta: number;
eta = 33;

let interrettore: boolean = false;

let saluto: string = "Ciao";

//Array
let materie: string[];

materie = ['Angular', 'Javascript', 'Html & Css'];

//Oggetto
let persona: object;

persona = {
    nome: "Dario",
    ruolo: "Docente"
}

//Posso definire la struttura di quell'oggetto - object type definition
let studente: {
    nome: string,
    cognome: string,
    matricola: number,
    materia: string
}

studente = {
    nome: "Elliott",
    cognome: "Migotti",
    matricola: 9,
    materia: "Angular"
}


//Definisco un Array di studenti
let studenti: {
    nome: string,
    cognome: string,
    matricola: number,
    materia: string
}[];

studenti = [
    {
        nome: "Pippo",
        cognome: "Rossi",
        matricola: 1,
        materia: "Angular"
    },
    {
        nome: "Paolino",
        cognome: "Paperino",
        matricola: 2,
        materia: "Javascript"
    }
]

//Type Inference
let nomeCorso = 'Tecnico Produzione Pagine Web';
let collegaCorso: string = 'Mario'; //ridondante

//Union TYPE - fornisco una serie di scelte sul tipo

let cosa: string | number | boolean= "penna";

//ALIAS - Servono a non ripetersi nella definizione di alcuni tipi. Es: duplicazione di oggetti 
//utilizzo la keyword type
//Creo un nuovo tipo di dato

type Docente = {
    nome: string,
    materia: string
}

let docenteJS: Docente;

docenteJS ={
    nome: "Dario",
    materia: "Javascript"
}

let corpoDocenti: Docente[];
corpoDocenti = [
    {
        nome:"Nicola",
        materia: "DB"
    },
    {
        nome: "Davide",
        materia: "Html & CSS"
    },
    {
        nome: "Dario",
        materia: "Javascript"
    }
]

for(let i = 0; i < corpoDocenti.length; i++){
    console.log(corpoDocenti[i].nome);
}

var elDemo = document.getElementById('demo');

corpoDocenti.forEach(element => {
    elDemo.innerHTML += element.nome + '<br>'
});







