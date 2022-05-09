$(document).ready(function(){

    let images = [
                    "./images/mustang2.jpg",
                    "./images/mustang1.jpg",
                    "./images/mustang6.jpg",
                    "./images/mustang4.jpg",
                    "./images/mustang5.jpg",
                ];

    let imageIndex = 0;
    let numberImages = images.length - 1;

    $(".backgroundImage").css("background-image", "url(" + images[0] + ")");

    // when the previous object is clicked change slides
    $('.previous').click(function(){

        if(imageIndex <= 0)
        {
            imageIndex = numberImages;

        }
        else
        {
            imageIndex -= 1;
        }

        $(".backgroundImage").css("background-image", "url(" + images[imageIndex] + ")");
    });

    // when the next object is clicked change slides
    $('.next').click(function(){

        if(imageIndex >= numberImages)
        {
            imageIndex = 0;
        }
        else
        {
            imageIndex += 1;
        }
        $(".backgroundImage").css("background-image", "url(" + images[imageIndex] + ")");
    });
});