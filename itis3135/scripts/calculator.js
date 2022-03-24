function displayClickedNumber(numberClicked)
{
    let outputArea = document.getElementById('calculatorDisplayArea');
    let previousText = outputArea.innerHTML;

    if (numberClicked == "=")
    {
        let output = equalsOperation(previousText)
    }
    else
    {
        outputArea.innerHTML = previousText + numberClicked
    }
    return;
}

function equalsOperation(currentEquation)
{
    currentEquation = currentEquation.toString();
    console.log(currentEquation);
    for(let i = 0; i < currentEquation.length; i++){
        console.log('|');
    }
    rerturn;
}



