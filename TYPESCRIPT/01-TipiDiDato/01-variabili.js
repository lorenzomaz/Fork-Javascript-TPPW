// Primitive: Number, Boolean, String
// Complesse: Array, Object
//Funzioni e metodi
var numero = 9; //il tipo può essere omesso
var eta;
eta = 33;
var interrettore = false;
var saluto = "Ciao";
//Array
var materie;
materie = ['Angular', 'Javascript', 'Html & Css'];
//Oggetto
var persona;
persona = {
    nome: "Dario",
    ruolo: "Docente"
};
//Posso definire la struttura di quell'oggetto - object type definition
var studente;
studente = {
    nome: "Elliott",
    cognome: "Migotti",
    matricola: 9,
    materia: "Angular"
};
//Definisco un Array di studenti
var studenti;
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
];
//Type Inference
var nomeCorso = 'Tecnico Produzione Pagine Web';
var collegaCorso = 'Mario'; //ridondante
//Union TYPE - fornisco una serie di scelte sul tipo
var cosa = "penna";
var docenteJS;
docenteJS = {
    nome: "Dario",
    materia: "Javascript"
};
var corpoDocenti;
corpoDocenti = [
    {
        nome: "Nicola",
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
];
for (var i = 0; i < corpoDocenti.length; i++) {
    console.log(corpoDocenti[i].nome);
}
var elDemo = document.getElementById('demo');
corpoDocenti.forEach(function (element) {
    elDemo.innerHTML += element.nome + '<br>';
});
