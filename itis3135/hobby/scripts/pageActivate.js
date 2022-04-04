function show(shown)
{
    // get array of all the elements with class name pages
    let pages = document.getElementsByClassName('pages');

    // show element/page passed in
    document.getElementById(shown).style.display = 'block';
    let buttonShown = shown + '_button';
    document.getElementById(buttonShown).style.color = '#EFCB68';

    // hide all other elements whose id is not passed in parameter
    for(let i = 0; i < pages.length; i++){
        if(shown != pages[i].id)
        {
            let buttonHide = pages[i].id + '_button';
            document.getElementById(buttonHide).style.color = '#AEB7B3';
            pages[i].style.display = 'none';
        }
    }
}