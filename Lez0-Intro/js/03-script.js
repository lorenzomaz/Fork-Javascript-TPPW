//Esempi di variabile
var ora = 10;

console.log("Sono le ore: " + ora);
console.log('La variabile è di tipo: ' + typeof ora); //typeof proprietà per capire che tipo di dato stiamo utilizzando

//Costanti
const PIGRECO = 3.14; //le costanti non cambiano valore 

console.log(PIGRECO);

const IVA = 0.22 //facciamo finta

var imponibile = 2000;

var prezzoIvato = (imponibile * IVA) + imponibile;

var costoIva =prezzoIvato - imponibile;

console.log("Il prezzo finale è " + prezzoIvato + ". Il costo dell' IVA è : " + costoIva);

//Altro metodo per concatenare: BACKTICK -> ` Alt + 96
console.log(`Il prezzo finale è ${prezzoIvato}. Il costo dell'IVA è ${costoIva}`);

//Stampiano nella pagina HTML i risultati. le variabili
var saluto = '<h1>Benvenuto sulla pagina calcolo tasse</h1>';
//1° metodo, da abbandonare, ci permette di scrivere nella pagina html
document.write(saluto); //metodo per la manipolazione del DOM

var recap = "Il prezzo finale è " + prezzoIvato + ". Il costo dell' IVA è : " + costoIva;

document.write('<p>' + recap +'</p>');
document.write('<p> Grazie per aver utilizzato il nostro servizio </p>')