$(function(){


    $.ajax({
        url: 'http://localhost:3000/viaggi',
        type: "GET",
        dataType: 'json',
        success: function(response){
            console.log(response);
            for(var i = 0; i < response.length; i++){
                costruisciCard(response[i].id, response[i].nome, response[i].immagine, response[i].descrizione);
            }
        
        }
    });


    function costruisciCard(id, nome, immagine, descrizione){
        let card = `<div class="card col-3" data-id="${id}" >`+
        `<img class="card-img-top" src="${immagine}" alt="Card image cap">`+  //Alt + 96 -> backtick
        '<div class="card-body">'+
          `<h5 class="card-title">${nome}</h5>`+
          `<p class="card-text">${descrizione}</p>`+
          `<a href="#" class="btn btn-primary" id="btnCompra">Compra</a>`+
        '</div>'+
      '</div>';
    
    
      
      $(document).on('click', '#btnCompra', function(){
          acquista(id, nome, immagine, descrizione);
          console.log('ciao');
      });
          
      $('#contCards').append(card);
      
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