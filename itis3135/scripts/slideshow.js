// Reference: https://stackoverflow.com/questions/22116664/jquery-slideshow


$(document).ready(function(){                       // once the DOM is ready on page will run script

    let $imgages = $('.slideshow img');             // get images in slideshow class
    let imageIndex = 0;                             // set index counter to first image
    let numberImages = $imgages.length;             // number of images

    $imgages.eq(imageIndex).siblings().hide();      // hide all images other than the first

    // when the previous object is clicked change slides
    $('.previous').click(function(){

        if(imageIndex <= 0)                         // if already on index 0 do nothing
        {
            return;
        }
        else                                        // decrease index and fade to that image
        {
            imageIndex -= 1;
            $imgages.fadeTo(1000,0).eq(imageIndex).stop(1).fadeTo(0,1000).eq(imageIndex);
        }
    });

    // when the next object is clicked change slides
    $('.next').click(function(){

        if(imageIndex >= numberImages - 1)          // if already on last index do nothing
        {
            return;
        }
        else                                        // increase index and fade to that image
        {
            imageIndex += 1;
            $imgages.fadeTo(1000,0).eq(imageIndex).stop(1).fadeTo(1,1000).eq(imageIndex);
        }
    });
});