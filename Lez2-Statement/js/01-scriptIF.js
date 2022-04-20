//Operatori 
var num1 = 12;
var num2 = 14;

// var valuta = num1 < num2; //true
// console.log(valuta);

var valuta = num1 > num2; //false
console.log(valuta);

var valuta2 = num1 != num2 //valuta se i due numeri sono diversi
console.log(valuta2);

var x = 20;
var y = '20';

var valuta3 = (x == y); //valuta se due variabili sono uguali
console.log(valuta3);

var valuta4 = (x === y) //valuta anche il tipo
console.log(valuta4);


//gioco
var puntiLvl1 = 4;
var puntiLvl2 = 9;

var puntiNecessari1 = 7;
var puntiNecessari2 = 8;

//VERISIONE DIFFICILE DEL GIOCO
//Per poter superare il gioco entrambi i livelli devono avere un numero di punti
//superiore a quelli necessari

var superaGioco = (puntiLvl1 >= puntiNecessari1) && (puntiLvl2 >= puntiNecessari2); //T && F ==> F
console.log(superaGioco);
//metto la prima condizione nell'if
if(superaGioco){ //affinché venga eseguito quello che ho tra parentesi graffe la condizione deve essere TRUE
    console.log("Bravo, hai superato il gioco");
}else{
    console.log("Mi spiace, non hai superato il gioco");
}

//VERSIONE FACILE DEL GIOCO
//Cambio le regole, basta che il giocatori suoperi 1 livello per terminare il gioco 
var superaGioco2 = (puntiLvl1 >= puntiNecessari1) || (puntiLvl2 >= puntiNecessari2); //T || F ==> T
console.log(superaGioco2);
if(superaGioco2){ //affinché venga eseguito quello che ho tra parentesi graffe la condizione deve essere TRUE
    console.log("Bravo, hai superato il gioco");
}else{
    console.log("Mi spiace, non hai superato il gioco");
}


//GIOCO PUNTI E SKILL
//Per concludere il gioco, l'utente deve avere un punteggio e una skill superiore a un dato valore

var sogliaPunt = 50;
var sogliaSkill = 120;

//L'utente gioca e raggiunge i seguenti punteggi 
var puntiUser = 50;
var skillUser = 120;

var msg = '';

if(puntiUser >= sogliaPunt && skillUser >= sogliaSkill){
    msg = 'Bravo, hai completato il gioco';
}else if(puntiUser < sogliaPunt && skillUser >= sogliaSkill){
    msg = 'Mi spiace non hai raggiunto i punti necessari. Con le skill ci siamo';
}else if(puntiUser >= sogliaPunt && skillUser < sogliaSkill){
    msg = 'Mi spiace non hai le skill necessarie. Con i punti va bene';
}else{
    msg = 'Caro utente fai schifo a sto gioco. Non hai nè punti nè skill necessarie'
}

console.log("Risultato gioco: " + msg);
