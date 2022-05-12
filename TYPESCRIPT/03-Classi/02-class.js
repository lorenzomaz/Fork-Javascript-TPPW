//Modo alternativo per la dichiarazione di una classe
var Utente = /** @class */ (function () {
    function Utente(nome, email, password) {
        this.nome = nome;
        this.email = email;
        this.password = password;
    }
    Utente.prototype.getInfo = function () {
        return "Nome: " + this.nome + " Email: " + this.email;
    };
    Utente.prototype.setPassword = function (value) {
        if (this.password == undefined) {
            console.log("L'utente non ha ancora settato la password");
        }
        else {
            this.password = value;
            console.log("L'utente ha appena settato la password");
        }
    };
    return Utente;
}());
var utente1 = new Utente("Pippo", "pippo@mail.com");
console.log(utente1.getInfo());
utente1.setPassword(undefined);
