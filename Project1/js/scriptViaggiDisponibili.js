$(function(){

    $.ajax({
        url: 'http://localhost:3000/viaggi',
        type: "GET",
        dataType: 'json',
        success: function(response){
            console.log(response);
            for(var i = 0; i < response.length; i++){
                costruisciCard(response[i].id, response[i].nome, response[i].immagine, response[i].descrizione, response[i].acquistato);
                viaggi.push(response[i]);
            }
        
        },
        complete: function(){
        
            // $('.card').each(function(){
            // //   console.log($(this).attr('data-acq'));
                
            //     if($(this).attr('data-acq') == "true"){
            //         console.log('Già acquistato');
            //         $('.btn').addClass('disabled')
            //     }
            // })
            
        }
    });

    
    let viaggi = [];
    console.log(viaggi);

    function costruisciCard(id, nome, immagine, descrizione, acquistato){
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
      acquista(id, nome, immagine, descrizione);
      });
      
    }
    
});


function acquista(id, nome, immagine, descrizione){
    $.ajax({
        url: 'http://localhost:3000/viaggi/'+ id,
        type: 'PUT',
        dataType: 'json',
        data: {
            nome: nome,
            immagine: immagine,
            descrizione: descrizione,
            acquistato: true
        },
        success: function(){
            console.log('ok');
        }

    });
}