var auto ={
    marca: '',
    modello: '',
    cilindrata: 0,
    velocita: 0,
    num_giri: 0,
    acceso: false,
    marcia: 0,

    setMotore : function(marca, modello, cilindrata){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;

        return 'Stai testando: ' + this.marca + ' ' +this.modello + '. Cilindrata ' + this.cilindrata;
    },

    setGiri(num_giri){
        this.num_giri = num_giri;
        return 'Il motore sta girando a ' + this.num_giri + ' giri/min';
    },

    setMarcia(marcia){
        this.marcia = marcia;
        // return `Sei alla marcia ${this.marcia}`; //alt+96
        return 'Sei alla marcia ' + this.marcia;
    },

    calcolaVelocita(){
        this.velocita = (this.num_giri / (this.marcia * 100));
        return 'La tua velocità è : ' + this.velocita + ' m/s'; 
    }
}

var provaFunz = function(base, altezza){ //espressione funzionale
    return base * altezza;
}

console.log(provaFunz(4,5));

console.log(auto.setMotore('Ford', 'Focus', 1600));
console.log(auto.setGiri(2000));
console.log(auto.setMarcia(4));
// auto.setGiri(2000);
// auto.setMarcia(4)
console.log(auto.calcolaVelocita());
// console.log(auto.marca = 'Fiat');

var demo = document.getElementById('demo');

function testaMotore(){
    var marca = document.getElementById('marca').value;
    var modello = document.getElementById('modello').value;
    var cilindrata = document.getElementById('cilindrata').value;
    var marcia = document.getElementById('marcia').value;
    var giriMotore = document.getElementById('giriMotore').value;
    
    var risultato = auto.setMotore(marca, modello, cilindrata) + '<br>'+
                    auto.setGiri(giriMotore) + '<br>' + 
                    auto.setMarcia(marcia) + '<br>' + 
                    auto.calcolaVelocita();
    
    demo.innerHTML = risultato;
}

//FAre controlli sui campi di input


