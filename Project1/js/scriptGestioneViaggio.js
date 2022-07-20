$('#btnAgg').on('click', function(){
  
  //  window.location.href = './gestisciViaggi.html'
  var nome = $('#nome').val();
  var immagine = $('#immagine').val();
  var descrizione = $('#descrizione').val();
  var prezzo = $('#prezzo').val();

  aggiungiViaggio(nome, descrizione, immagine, prezzo)
});

function aggiungiViaggio(nome, descrizione, immagine, prezzo){
   $.ajax({
       url: 'http://localhost:3000/prodotti',
       type: 'POST',
       dataType: 'json',
       data:{
           nome: nome,
           immagine: immagine,
           descrizione: descrizione,
           prezzo: prezzo,
           acquistato: false
       },
       success: function(){
           alert('Inserimento avvenuto con successo');
       }
   })
}


// Inserire l'eliminazione del singolo viaggio attraverso una lista con dei pulsanti per eliminare
