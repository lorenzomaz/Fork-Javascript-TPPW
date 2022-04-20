//METODI PER STRINGHE
//Anche le stringhe sono 0-based
//Possono essere trattate come array di caratteri

var str1 = 'Ciao';
console.log(str1.length); //--> 4
console.log(str1[0]);   //--> C

var str2 = "Ciao come stai ?"; //Anche gli spazi sono contati come caratteri
console.log(str2.length);

//METODI PER LA RICERCA
var search1 = str2.indexOf('come'); //restituisce l'indice di partenza della parola
console.log(search1);

var search2 = str2.indexOf('o') //restuituisce indice della lettera ma solo quello della prima occorrenza
console.log(search2);

var search3 = str2.indexOf('z');
console.log(search3); //-1

var search4 = str2.lastIndexOf('o') //restituisce l'ultima occorrenza
console.log(search4);

var search5 = str2.charAt(7);
console.log(search5);

var search6 = str2.charCodeAt(7); //restituisce il codice carattere ASCII
console.log(search6);

//METODI per il TAGLIO
var str3 = "Tra poco andiamo in Pausa!";

var sl = str3.slice(2,10);
console.log(sl);

var sub = str3.substring(2,10);
console.log(sub);

//Metodi per sostituire
var str4 = 'Il miglior browser al mondo è Internet Explorer!!!';
var rep = str4.replace('Internet Explorer', 'Google Chrome');
console.log(rep); 

//Metodi vari
var upp = rep.toUpperCase();
console.log(upp);

var low = rep.toLowerCase();
console.log(low);


//Metodi per la scomposizione in Array
var str5 = "Ciao";
var convInArray = str5.split(''); //Passando una stringa vuota, il metodo split taglia in ogni carattere
console.log(convInArray);

var str6 = ['D', 'a', 'r', 'i', 'o'];
var convInString = str6.join('');
console.log(convInString);

var str7 = "Ciao mi chiamo Dario";
var spl = str7.split(' ');
console.log(spl);

var spl2 = str7.split('mi');
console.log(spl2);

//Esempio
var str8 = "Ciao come stai?";
//invertire l'intera stringa
var inversa = str8.split('').reverse().join('');
console.log(inversa);

//Recupera il testo scritto nell'html,
//Metti tutto in maiuscolo la parola che segue i punti .
var lorem = document.getElementById('lorem');
var testo = lorem.innerHTML.trim(); //utilizzo innerHTML per leggere ciò che è scritto dentro
                                    //trim() toglie gli spazi davanti e dietro il testo
// console.log(testo);
// var diviso = testo.split('.')

// console.log(diviso);

// var parolaSingola1 = diviso[0].split(' ')[0].toUpperCase(); //LOREM
// console.log(parolaSingola1);

// var parolaSingola2 = diviso[1].split(' ')[1].toUpperCase(); //REM
// console.log(parolaSingola2);

// var newTxt1 = testo.replace('Lorem', parolaSingola1);
// var newTxt2 = newTxt1.replace('Rem', parolaSingola2);
//lorem.innerHTML = newTxt2

var newTxt1 = testo.replace('Lorem', 'LOREM');
var newtxt2 = newTxt1.replace('Rem', 'REM');

lorem.innerHTML = newtxt2;


var mioTxt = "                Mi chiamo Dario                 ";

console.log(mioTxt.trim());




