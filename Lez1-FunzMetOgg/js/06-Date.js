var oggi = new Date();

console.log(oggi);

console.log("Anno: " + oggi.getFullYear());
console.log("Mese: " + oggi.getMonth());
console.log("Giorno: " + oggi.getDay());
console.log("Giorno del Mese: " + oggi.getDate());
console.log("Ora del Giorno: " + oggi.getHours());
console.log("Minuto: " + oggi.getMinutes());
console.log("Secondo: " + oggi.getSeconds());
console.log("Millisecondo: " + oggi.getMilliseconds());

//Possiamo settare una data
var nuovaData = new Date('Mar 09, 2013');
console.log(nuovaData);


//per creare l'orologio devo lanciare la funzione una volta al secondo
//setinterval lancia una funzione ad intervalli regolari
const clock = document.getElementById('clock');

setInterval(() => {  
    var oraEsatta = new Date();
    var ora = oraEsatta.getHours();
    var min = oraEsatta.getMinutes();
    var sec = oraEsatta.getSeconds();

    if(ora < 10){
        ora = '0' + ora
    }

    if(min < 10){
        min = '0' + min;
    }

    if(sec < 10){
        sec = '0' + sec;
    }

    var orario = ora + ': ' + min + ': ' + sec;
    clock.innerHTML = orario;
}, 1000)

