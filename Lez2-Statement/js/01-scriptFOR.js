//GIOCO
//voglio un resoconto dei punti totalizzati ogni livello con incluso un messaggio
//Ogni livello ha una soglia punti di 30;

var punteggi = [35,40,25,32, 50, 10, 62, 0];

//per leggere i singoli punteggi utilizzo un ciclo for

// for(var i = 0; i < punteggi.length; i++){
//     console.log('Punteggio livello ' + i + ': ' + punteggi[i]);
// }


//for con innesto di If
// for(var i = 0; i < punteggi.length; i++){
//     if(punteggi[i] > 30){
//         msg = 'Punteggio livello ' + i + ': ' + punteggi[i];
//     }else{
//         msg = 'Punteggio livello ' + i + ': ' + punteggi[i] + '. Livello non superato'
//      }

//      console.log(msg);
// }

//Versione Ottimizzata
for(var i = 0; i < punteggi.length; i++){
    msg = 'Punteggio livello ' + i + ': ' + punteggi[i];
    if(punteggi[i] < 30){
        msg += '. Livello non superato';
    }

    if(punteggi[i] == 0){
        msg = 'PAUSAAAAAAAAAA'
    }
    console.log(msg);
}




// var anni = 32;

// console.log( anni++ ); //post-incremento: prima leggo la variabile poi la incremento
// console.log(anni);


// var giorni = 12;

// console.log( ++giorni); //pre-incremento: prima aumento di 1 la variabile poi la leggo

