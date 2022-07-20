$(function(){

    var totalePrezzo = 0;
    var prodottiAll = '';

    $.ajax({
        url: 'http://localhost:3000/prodotti',
        type: "GET",
        dataType: 'json',
        success: function(prodotti){
            
            prodottiAll = prodotti;

           //creo un filtro a mano, selezionando solo i prodotti acquistati
           for(var i = 0; i < prodotti.length; i++){
               if(prodotti[i].acquistato == 'true'){
                stampaLista(prodotti[i].nome, prodotti[i].prezzo);
                totalePrezzo += Number(prodotti[i].prezzo);
                console.log(prodotti[i]);
               }
           }

           if(totalePrezzo == 0){
               $('#btnAcq').hide();
               $('#pagamento').hide();
           }
            
        },
        complete: function(){
            console.log(totalePrezzo);       
            $('#riepilogo').append('<h2> Totale: ' + totalePrezzo + ' € </h2>') 
            console.log(prodottiAll);    
        }

    });

    function stampaLista(nome, prezzo){
        $('#listaCarrello').append('<li>' + nome + ' - ' + prezzo + ' € </li>');
    }

    $(document).on('click', '#btnAcq', function(event){
     
        if($('#nome').val() == ''){
            alert('non hai compilato il nome');
       }else if($('#email').val() == ''){
            alert('non hai compilato il campo mail ');
       }
        else{
            restoreViaggi(prodottiAll)
        }
    });

    function restoreViaggi(prodotti){
        for(var i = 0; i < prodotti.length; i++){
        $.ajax({
            url:'http://localhost:3000/prodotti/' + prodotti[i].id,
            type: 'PUT',
            dataType:'json',
            data: {
                nome: prodotti[i].nome,
                immagine: prodotti[i].immagine,
                descrizione: prodotti[i].descrizione,
                acquistato: false,
                prezzo: prodotti[i].prezzo
            },
            complete: function(){
                window.location.href = "./thanks.html"
            }
        })
    }
    }
})