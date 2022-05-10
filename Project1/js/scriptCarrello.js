$(function(){
    $.ajax({
        url: 'http://localhost:3000/viaggi',
        type: "GET",
        dataType: 'json',
        success: function(response){
            
            // for
            // if(response.acquistato == true){

            // }
        
        },
        complete: function(){
        }

    });



})