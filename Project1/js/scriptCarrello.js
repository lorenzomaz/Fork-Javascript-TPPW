$(function(){

    var totalePrezzo = 0;
    var viaggiAll = '';

    $.ajax({
        url: 'http://localhost:3000/viaggi',
        type: "GET",
        dataType: 'json',
        success: function(viaggi){
            
            viaggiAll = viaggi;

           //creo un filtro a mano, selezionando solo i viaggi acquistati
           for(var i = 0; i < viaggi.length; i++){
               if(viaggi[i].acquistato == 'true'){
                stampaLista(viaggi[i].nome, viaggi[i].prezzo);
                totalePrezzo += Number(viaggi[i].prezzo);
                console.log(viaggi[i]);
               }
           }
            
        },
        complete: function(){
            console.log(totalePrezzo);       
            $('#riepilogo').append('<h2> Totale: ' + totalePrezzo + ' € </h2>') 
            console.log(viaggiAll);    
        }

    });

    function stampaLista(nome, prezzo){
        $('#listaCarrello').append('<li>' + nome + ' - ' + prezzo + ' € </li>');
    }

    $(document).on('click', '#btnAcq', function(){
        $('#listaTotale').fadeOut(1500)
        $('#feedback').hide().fadeIn(2000).append('<h2>Grazie per aver acquistato i nostri viaggi !</h2>');
        restoreViaggi(viaggiAll)
    });

    function restoreViaggi(viaggi){
        for(var i = 0; i < viaggi.length; i++){
        $.ajax({
            url:'http://localhost:3000/viaggi/' + viaggi[i].id,
            type: 'PUT',
            dataType:'json',
            data: {
                nome: viaggi[i].nome,
                immagine: viaggi[i].immagine,
                descrizione: viaggi[i].descrizione,
                acquistato: false,
                prezzo: viaggi[i].prezzo
            }
        })
    }
    }
})