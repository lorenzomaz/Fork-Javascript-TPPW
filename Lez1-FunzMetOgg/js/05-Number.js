var numeroInziale = 12.54789544;

console.log("Il num iniziale è: " + numeroInziale);

//arrotondamento
var numArr = numeroInziale.toFixed(3);
console.log("Il num arrotondato è: " + numArr);

//cifre significative
var numSig = numeroInziale.toPrecision(2);
console.log("Solo cifre significative " + numSig);

//OGGETTO NUMBER
var num2 = '10'; //Questa è una stringa
//Se voglio trasformare la stringa in un numero devo utilizzare l'interfaccia Number
//la quale forza il dato ad essere un numero

var numeroDaStringa = Number(num2); //utile nei campi input in cui viene chiesto all'utente di inserire un numero
//poiché i campi input restituiscono sempre una stringa che noi castiamo a number

console.log('La vecchia stringa vale: ' + numeroDaStringa);
console.log(typeof numeroDaStringa); //la prop typeof mi defiunisce il tipo di dato

var x1 = true;
console.log(Number(x1));

var x2 = false;
console.log(Number(x2));

var x3 = '155';
console.log(Number(x3));

var x4 = '123 456';
console.log(Number(x4)); // --> NaN = Not a Number

var x5 = "Ciao";
console.log(Number(x5));

var x6 = new Date();
console.log(Number(x6.getHours()));

//isNaN si chiede se la variabile che gli passiamo non è un numero

var parola = 'Ciao';
console.log("La variabile parola è diversa da un numero ? " + isNaN(parola));

var num  = 42;
console.log("La variabile num è diversa da un numero ? " + isNaN(num));

//ParseInt che trasforma una stringa o un numero in un intero (numero senza virgola)
//ParseFloat che trasforma una stringa o un numero in un numero con la virgola

var a = "10.58";
console.log( parseInt(a) );

var b = "11.77";
console.log( parseFloat(b) );

var c = 15;
console.log(parseFloat(c));

