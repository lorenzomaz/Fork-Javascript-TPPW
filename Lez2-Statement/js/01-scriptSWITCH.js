var msg = '';

var level = 1;

switch(level){
    case 1:
        msg = 'Ciao, sei al primo livello, buona fortuna';
    break;

    case 2:
        msg = 'Sei al secondo livello, questo sarò più complicato del primo';
    break;

    case 3:
        msg = 'Ora che sei arrivato all\'ultimo livello ci sarà il mostro finale';
    break;

    default:
        msg = 'Benvenuto nel gioco';
    break;
}

console.log(msg);


var msg2 = '';
var parola = 'Ciao';


switch(parola){
    case 'Ciao':
        msg2 = 'Ciao anche a te !';
    break;

    case 'Dario':
        msg2 = 'Ciao Dario, adesso conosco il tuo nome';
    break;

    case 'Scemo':
        msg2 = 'Non c\'è bisogno di insultarmi';
    break;

    default:
        msg2 = 'Non so valutare la tua parola';
    break;
}

console.log(msg2);



var giorno = new Date().getDay();
var msg3 = '';

switch(giorno){
    case 0:
        msg3 = 'domenica';
    break;

    case 1:
        msg3 = 'Lunedì';
    break;

    case 2:
        msg3 = 'Martedì';
    break;

    case 3:
        msg3 = 'Mercoledì';
    break;

    case 4:
        msg3 = 'Giovedì';
    break;

    case 5:
        msg3 = 'Venerdì';
    break;

    case 6:
        msg3 = 'Sabato';
    break;

    
}

console.log('Oggi è: ' + msg3);





