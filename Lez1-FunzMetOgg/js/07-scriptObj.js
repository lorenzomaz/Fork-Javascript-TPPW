//Oggetto con notazione letterale
var studente = {
    nome: 'Francesca',
    cognome: 'Vetrugno',
    promosso: true,
    matricola: 14,
    dataNascita: new Date('05/25/1995').getFullYear(),
    voto: 30,

    superaEsame: function(){
       if (this.voto >= 18) {
          return 'Brava, hai superato l\'esame' 
       }else{
           return 'Mi dispiace, esame da riprovare'
       }
    },

    presentaStudente: function(){
        var info = 'Lo studente si chiama: ' + this.nome + ' ' + this.cognome +'<br>';
            info += ' Nata nel: ' + this.dataNascita + '<br>';
            info += ' Matricola num: ' + this.matricola + '<br>';
            info += this.superaEsame() + '<br>';
    
        return info;
    }
}

var studente1 = {
    nome: 'Katerina',
    cognome: 'Bahamazava',
    promosso: true,
    matricola: 1,
    dataNascita: new Date().getFullYear(),
    voto: 30,

    superaEsame: function(){
        if (this.voto >= 18) {
           return 'Brava, hai superato l\'esame' 
        }else{
            return 'Mi dispiace, esame da riprovare'
        }
     },
 
     presentaStudente: function(){
         var info = 'Lo studente si chiama: ' + this.nome + ' ' + this.cognome +'<br>';
             info += ' Nata nel: ' + this.dataNascita + '<br>';
             info += ' Matricola num: ' + this.matricola + '<br>';
             info += this.superaEsame() + '<br>';
     
         return info;
     }
}


//Voglio sfruttare prop e metodi dell'oggetto
//Utilizzo la notazione punto . per richiamarle

console.log("Lo studente si chiama: " + studente.nome + ' ' + studente.cognome);
console.log("Nata/o nel: " + studente.dataNascita);
console.log("Matricola num: " + studente.matricola);
console.log("Esito: " + studente.superaEsame());

var demo = document.getElementById('demo');
demo.innerHTML = studente1.presentaStudente();


