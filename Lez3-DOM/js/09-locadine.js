var films = [
    {
        titolo: "Febbre da Cavallo",
        durata: 95,
        anno: 1976,
        locandina: 'https://www.romasegreta.it/krlcrt/wp-content/uploads/2021/07/febbre-da-cavallo.jpg',
        genere: 'Commedia',
        attori: ['Gigi Proietti', 'Enrico Montesano', 'Catherine Spaak'],
        regista: 'Steno'
    },
    {
        titolo: "Un sacco Bello",
        durata: 100,
        anno: 1980,
        locandina: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsvMRJgSqoTJZmarocB1ULxy2kqB7fX-yVrfXSwCASEG_V0wHi',
        genere: 'Commedia',
        attori: ['Carlo Verdone', 'Mario Brega', 'Sora Lella'],
        regista: 'Carlo Verdone'
    },
    {
        titolo: "Non ci resta che piangere",
        durata: 105,
        anno: 1984,
        locandina: 'https://m.media-amazon.com/images/I/51O9HbsKjgL._SY445_.jpg',
        genere: 'Commedia',
        attori: ['Massimo Troisi', 'Roberto Benigni', 'Amanda Sandrelli'],
        regista: 'Massimo Troisi'
    },
];

var titolo = document.querySelector('#titolo');
var locandina = document.querySelector('#locandina');
var durata = document.querySelector('#durata');
var anno = document.querySelector('#anno');
var genere = document.querySelector('#genere');
var attori = document.querySelector('#attori');
var regista = document.querySelector('#regista');

var btnPreMov = document.querySelector('#preMov');
var btnNextMov = document.querySelector('#nextMov');


function mostraFilm(index){
    titolo.innerHTML = films[index].titolo;
    locandina.setAttribute('src', films[index].locandina);
    var elenco = '';
    for(var i = 0; i < films[index].attori.length; i++){
        elenco += '<li>' + films[index].attori[i] + '</li>';
    }
    attori.innerHTML = elenco;

    durata.innerHTML = films[index].durata;
    anno.innerHTML = films[index].anno;
    regista.innerHTML = films[index].regista;
    genere.innerHTML = films[index].genere;
}

mostraFilm(0);

var contatore = 0; //questo è l'indice

function nextMovie(){
    //va avanti nei film
    if(contatore == films.length - 1){
        contatore = 0
    }else{
        ++contatore;
    }

    mostraFilm(contatore);
}

function prevMovie(){
    //va indietro nei film
    if(contatore == 0){
        contatore = films.length - 1
    }else{
        --contatore;
    }
    mostraFilm(contatore);
}
//gestione eventi in JS
//sul pulsante btn chiamo la prop onclick e asssocio una funzione
//ATT: la funzione va richiamata senza parentesi tonde
btnNextMov.onclick = nextMovie;
btnPreMov.onclick = prevMovie;
