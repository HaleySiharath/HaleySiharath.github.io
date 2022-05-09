// https://www.jqueryscript.net/form/character-input-limit.html

$(document).ready(function(){ // on load of the html
    $('.limit').on('keyup', function() { 
        $('.limit_count').html("("+$(this).val().length+" / 400)");
        // where to change limit count

        if($(this).val().length > 400) { // if the limit value is above a specific threshold then stop it
            $(this).val($(this).val().substring(0, 400)); 
            // don't allow user to type over character lmit
            
            $('.limit_count').html("(400 / 400)"); 
            // keep limit count at max
        }
    });
});
