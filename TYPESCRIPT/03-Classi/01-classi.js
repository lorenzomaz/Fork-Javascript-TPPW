var Studente = /** @class */ (function () {
    //posso avere anche il costruttore, il quale viene lanciato nel momento in cui istanzio
    //un nuovo oggetto di tipo Studente
    function Studente(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    //creo dei metodi
    Studente.prototype.partecipa = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    //Getters
    Studente.prototype.getCorsi = function () {
        return this.corsi;
    };
    Studente.prototype.getInfo = function () {
        var info = "Lo studente si chiama " + this.nome + " " + this.cognome + ". Età: " + this.eta;
        return info;
    };
    //SETTERS
    Studente.prototype.setNome = function (nome) {
        if (nome == "Carlo") {
            console.log("Mi spiace ma questo utente già esiste, cambia nome");
        }
        else {
            this.nome = nome;
        }
    };
    return Studente;
}());
//costruisco un'istanza della mia classe
var studente = new Studente("Dario", "Mennillo", 33, ["Javascript", "Spring"]);
studente.partecipa('Sass');
studente.setNome('Carlo');
console.log(studente.getInfo());
console.log(studente.getCorsi());
