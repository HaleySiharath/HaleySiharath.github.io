const homePageImages = [
                        'images/',
                        'images/'];

const homePageCaptions = [
                        'caption 1',
                        'caption 2',];

let slideIndex = 0;

window.onload = function() 
{
    let outputAreaImages = document.getElementById('slides');
    let outputAreaDots = document.getElementById('slide-dots')

    for(let i = 0; i < homePageImages.length; i++)
    {
        outputAreaImages.innerHTML += '<div class = "mySlides">';
        outputAreaImages.innerHTML += '<div class = "numbertext">' + (i+1) + '/' + homePageImages.length + '</div>';
        outputAreaImages.innerHTML += '<img src = ' + homePageImages[i] + ' style = "width: 100%" alt = "' + homePageCaptions[i] + '"/>';
        outputAreaImages.innerHTML += '<div class = "caption">' + homePageCaptions[i] + '</div>';
        outputAreaImages.innerHTML += '</div>';

        outputAreaDots.innerHTML  += '<span class = "dot" onclick = "currentSlide(' + (i+1) + ')"></span>';
    }

    showSlides(slideIndex);
}

function plusSlides(index)
{
    showSlides(slideIndex += index);
}

function showSlides(slideIndex)
{
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    // if the slide is above number of slides go back to index 0
    if(slideIndex > slides.length)
    {
        slideIndex = 0;
    }
    // if slide is below 0 then go to last image in array
    if(slideIndex < 0)
    {
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].classList.replace(" active", "")
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

}