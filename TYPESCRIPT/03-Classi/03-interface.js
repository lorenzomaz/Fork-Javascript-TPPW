var studente1;
studente1 = {
    nome: "Elliott",
    cognome: "Migotti",
    eta: 28,
    saluta: function () {
        return "Ciao a tutti";
    }
};
var Studente = /** @class */ (function () {
    function Studente(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    Studente.prototype.saluta = function (value) {
        return "ciao a tutti quanti specialmente a : " + value;
    };
    return Studente;
}());
var elliott2 = new Studente("Elliott", "Migotti", 28);
console.log(elliott2.saluta('Mimmo'));
