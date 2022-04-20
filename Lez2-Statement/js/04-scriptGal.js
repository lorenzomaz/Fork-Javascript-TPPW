const foto = document.getElementById('foto');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

var immagini = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];
var contatore = 0;

//inizio
var img = '<img class="dimImg" src="' + immagini[contatore] + '" >';
foto.innerHTML = img;


//scorrimento

function ruotaFotoAvanti(){

    contatore++;

    if(contatore == immagini.length) //SOLO SE nell' If c'è un'unica istruzione posso abolire le {}
        contatore = 0;

    var img = '<img class="dimImg" src="' + immagini[contatore] + '" >';
    
    foto.innerHTML = img;
    
    console.log(contatore);
}


function ruotaFotoIndietro(){
    contatore--; 

    if(contatore < 0)
        contatore = immagini.length - 1
    
    var img = '<img class="dimImg" src="' + immagini[contatore] + '" >';
    foto.innerHTML = img;

    console.log(contatore);
}

//eventi in JS
btn.onclick = ruotaFotoAvanti; //in questo caso le funzione vanno richiamate solo con il nome, senza ()
btn2.onclick = ruotaFotoIndietro;


//Carico un'immagine nel nuovo Div
var nuovaImg = document.getElementById('nuovaImg'); //tag immagine
//settare una foto, utilizzando la prop src
nuovaImg.src = 'img/3.jpg';
// nuovaImg.setAttribute('src',immagini[2]);





