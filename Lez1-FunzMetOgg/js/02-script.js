function calcolaArea(base, altezza){
    var area = base * altezza;

    return area;
}

//Quando richiamo una funzione con paramentri devo rispettare la firma

var areaCalcolata = calcolaArea(5,4);

console.log("Il risultato è : " + areaCalcolata);

//Esempio
function getNome(nome){

    // this.nome = nome;

    // return "Ciao " + this.nome;

    return "Ciao " +  nome;
}

var nomeUtente = getNome('Dario');

console.log(nomeUtente);

//PAUSA