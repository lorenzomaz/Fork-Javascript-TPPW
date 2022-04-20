// var studente1 = {nome: ' Katsiaryna', cognome :'Bahamazava', matricola: 1};
// var studente2 = {nome: 'Fatima', cognome :'Bogtoub', matricola: 2};

//Notazione con costruttore
function Studente(nome, cognome, matricola, anno){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function(){
        var stud = 'Studente ' + this.nome + ' ' + this.cognome + 
                ' nato nel: ' + this.anno + '. Matricola: ' + this.matricola;

        return stud;
    }
}


//creo nuove istanze di tipo Studente
var studente1 = new Studente('Dario', 'Mennillo', 0, 1989);
var studente2 = new Studente('Paolo', 'Rossi', 1, 1985);

console.log(studente1.presentati());

var classe = [
    new Studente('Katsiaryna', 'Bahamazava', 1, 1995),
    new Studente('Fatima', 'Bogtoub', 2, 1998),
    new Studente('Brenda', 'Bravo', 3, 1996),
    new Studente('Mohamed', 'Dalaoui', 4, 1994),
    new Studente('Alessia', 'Diana', 5, 1993),
    new Studente('Nicolò', 'Hodach', 6, 2001 ),
    new Studente('Ersilda', 'Kodra', 7, 2003),
    new Studente('Lorenzo', 'Mazza', 8, 1999),
    new Studente('Elliott', 'Migotti', 9, 1993),
    new Studente('Marina', 'Moiseeva', 10, 1987),
    new Studente('Mauricio', 'Suarez', 11, 2002),
    new Studente('Stefano', 'Tortorella', 12, 1990),
    new Studente('Mattia', 'Tozzoli', 13, 1996),
    new Studente ('Francesca', 'Vetrugno', 14, 1995),
    new Studente('Sara', 'Viglione', 15, 1992),
    new Studente('Federico', 'Procacci', 16, 1998)
];

var demo = document.getElementById('demo');

for(var i in classe){
    //console.log(classe[i].presentati());
    //demo.innerHTML += classe[i].presentati() + '<br>';
     demo.innerHTML += 'Matricola: ' + classe[i].matricola + ' - ' + classe[i].nome + ' ' + classe[i].cognome + '<br>';
}
