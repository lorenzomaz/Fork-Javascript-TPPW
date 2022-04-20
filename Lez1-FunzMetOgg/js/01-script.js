// //dichiaro la funzione
// function saluta(){
//     alert('Ciao Utente, benvenuto!!');
// }

// //Richiamo la funzione per farla partire
// saluta();




var utente = ''; //variabile globale

function getNome(){
    //valorizzo utente
    utente = 'Dario';
}

function benvenuto(){
    getNome();
    var mess = 'Ciao ' + utente + ' benvenuto sulla pagina';
    var demo = document.getElementById('demo');
    demo.innerHTML = mess;
}

benvenuto();

//ESEMPIO VAR GLOBALE E LOCALE

var testo = "Questo è il mio testo"; //Var GLOBALE

function prova2(){
    var testo = "Testo della prova 2"; //Var LOCALE
    console.log(testo);
}

prova2();