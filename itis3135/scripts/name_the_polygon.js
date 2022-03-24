// ACTIVITY 6 - NAME THE POLYGON
const polygons = [
    'circle',
    'angle',
    'triangle',
    'square',
    'pentagon',
    'hexagon',
    'heptagon',
    'oktogon',
    'enneagon',
    'dekagon'
];

function getShape()
{
let shapeNumberInput = prompt('The Hazle Sloth snuggle would be delighted if you entered a number from 1 to 10');
let outputText = validateEntry(shapeNumberInput);

alert(outputText);
return;
}

function validateEntry(userInput)
{

// if user doesn't enter anything
if(userInput === "")
{
return 'Please enter something... anything.';
}
// if user doesn't put in a number
if(isNaN(userInput))
{
return 'Thats not the correct input, silly! Try agian.'
}

// convert input to absolute value and round up
userInput = parseFloat(userInput);
userInput = Math.abs(userInput);
userInput = Math.ceil(userInput);

// check if the number is within range
if(userInput > 10 || userInput < 1)
{
    return 'Thats out of range, silly! Try agian.'
}

// if all parameters are checked and pass then return the coinciding shape name
else
{
return 'The shape is ' + polygons[userInput - 1] + '. LETS GO!'
}
}