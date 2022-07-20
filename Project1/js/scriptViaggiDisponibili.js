$(function(){

    $.ajax({
        url: 'http://localhost:3000/prodotti',
        type: "GET",
        dataType: 'json',
        success: function(response){
            console.log(response);
            for(var i = 0; i < response.length; i++){
                costruisciCard(response[i].id, response[i].nome, response[i].immagine, response[i].descrizione, response[i].acquistato, response[i].prezzo);
                prodotti.push(response[i]);
            }
        },
        complete: function(){
        
            $('.card').each(function(){
            
                if($(this).attr('data-acq') == "true"){
                    console.log('Già acquistato');
                    $(this).find('.card-body').append('<p class="text-start">Prodotto già inserito nel carrello</p>')
                    $(this).find('.btn').addClass('disabled');
                }
            })
            
        }
       
    });

    
    let prodotti = [];
    console.log(prodotti);

    function costruisciCard(id, nome, immagine, descrizione, acquistato, prezzo){
        let card = `<div class="col mb-3"><div class="card" data-id="${id}" data-acq="${acquistato}" >`+
        `<img class="card-img-top" src="${immagine}" alt="Card image cap">`+  //Alt + 96 -> backtick
        '<div class="card-body">'+
          `<h5 class="card-title">${nome}</h5>`+
          `<p class="card-text">${descrizione}</p>`+
          `<a href="#" class="btn btn-primary" id="btnCompra${id}">Compra</a>`+
        '</div>'+
      '</div>'+'</div>';
    
      

      $('#contCards').append(card);
      
      $(document).on('click', '#btnCompra'+id, function(){     
        acquista(id, nome, immagine, descrizione, prezzo); //è una PUT 
      });
      
    }
    
});

//la funzione acquista si occuperà di fare una chiamata PUT al db e modificare la propriertà acquistato
//la funzione acquista partirà sul pulsante COMPRA (riga 36)

function acquista(id, nome, immagine, descrizione, prezzo){
    $.ajax({
        url: 'http://localhost:3000/prodotti/'+id,
        type: 'PUT',
        dataType: 'json',
        data: {
            nome: nome,
            immagine: immagine,
            descrizione: descrizione,
            acquistato: true,
            prezzo: prezzo
        },
        complete: function(){
            // senza refresh pagina ??
        }
    })
}


