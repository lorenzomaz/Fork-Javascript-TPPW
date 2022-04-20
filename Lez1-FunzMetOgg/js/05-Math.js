//radice di un numero
var num = 16;
var radice = Math.sqrt(num);
console.log(radice);

//potenza di un numero
var num2 = 4;
var potenza = Math.pow(num2, 3);
console.log(potenza);

//Valore assoluto = parte positiva di un numero -3 -> 3
var num3 = -54;
var abs = Math.abs(num3);
console.log(abs);

//Ceil & Floor
//Ceil arrotonda all'intero maggiore più vicino
//Floor arrotonda all'intero minore più vicino 

var num4 = 26.53;
var ceil = Math.ceil(num4);
console.log(ceil);

var floor = Math.floor(num4);
console.log(floor);

//Round - arrotonda all'intero più vicino 
var num5 =  28.49;
var arr = Math.round(num5);
console.log(arr);

//Random - genera un numero casuale compreso tra 0 e 1
var numCas = Math.random();
console.log(numCas);

var numCas2 = Math.ceil(Math.random() * 10);
console.log(numCas2);

var numCas3 = Math.ceil(Math.random()* 1000);
console.log(numCas3);