const notNumbers = [".",
                    "/",
                    "x",
                    "+",
                    "-",
                    "="];

function displayClickedNumber(numberClicked)
{
    let outputArea = document.getElementById('calculatorDisplayArea');
    let previousText = outputArea.innerHTML;
    previousTextArray = getEquationArray(previousText);

    if (numberClicked == "=")
    {
        let output = equalsOperation(previousTextArray)
    }
    else if (validInput(numberClicked, previousTextArray))
    {
        outputArea.innerHTML = previousText + numberClicked;
        return;
    }
    else
    {
        return;
    }
}

function getEquationArray(currentEquation)
{
    currentEquation = currentEquation.toString();
    let currentEquationArray = [];
    currentEquationArray = currentEquation.split("");
    console.log(currentEquationArray);
    
    return currentEquationArray;
}


function validInput(userInput, currentEquation)
{
    let lastInput = currentEquation[currentEquation.length - 1];
    
    for(let i = 0; i < notNumbers.length - 1; i++)
    {
        if(userInput == lastInput && lastInput == notNumbers[i])
        {
            return false;
        }
        
        for(let y = 0; y < notNumbers.length - 1; y++)
        {
            if(userInput == notNumbers[i] && lastInput == notNumbers[y])
            {
                return false;
            }
        }
        
        
    }
    return true;
}





