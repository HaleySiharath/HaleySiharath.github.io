$(document).ready(function(){
    // Calls collage plus to sort photos in a container
    // https://plugins.jquery.com/collageplus/
    $('.collage').collagePlus({
        'targetHeight' : 300
    });

    $(".tabs").tabs({
        collapsible: false
    });
});
