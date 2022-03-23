// JAVASCRIPT TEST FUNCTION
function scriptTest() 
{
    alert("Hey my script is running");
}

// FUNCTIONS FOR DATE AND TIME
const weekdays = ['Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'];

const months = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'];

function displayTimeMessage() 
{
    // call getTimeInformation to get the date output message
    let outputText = getTimeInformation();
    console.log(outputText);

    // intialize the output area and change the content to say the date output message
    let outputArea = document.getElementById('dateOutputArea');
    outputArea.innerHTML = outputText;
    return;
}

function getTimeInformation() 
{
    // intialize fullDate with the current date informaiton
    let fullDate = new Date();

    // get all of the date information
    let year = fullDate.getFullYear();
    let month = months[fullDate.getMonth()];
    let weekday = weekdays[fullDate.getDay()];
    let day = fullDate.getDate();
    
    // get all of the time information
    let hour = fullDate.getHours();
    let amOrPm = 'am';
    // convert the time of day to proper notation
    if(hour > 12) 
    {
        amOrPm = 'pm';
        hour = hour - 12;
    }
    let minute = fullDate.getMinutes();
    if(minute < 10)
    {
        minute = `0${minute}`;
    }
    
    // return the string to be displayed
    return 'It is currently ' + hour + ':' + minute + amOrPm + ' on a ' + weekday + '. It is also ' + month + ' ' + day +
            ' in the year of ' + year + '.';
}

// FUNCTION FOR GREETING MESSAGE (INPUT FROM FORM)
function displayGreetingMessage()
{
    // intialize the element to create and the message to be displayed
    let outputArea = document.getElementById("greetingsMessageOutputArea");
    let outputText = getGreetingInformation();

    // replace the text with the greeting message
    outputArea.innerHTML = outputText;
    return;
}

function getGreetingInformation()
{
    let name = document.getElementById('name').value;
    let mood = document.getElementById('mood').value;

    if(!name)
    {
        name = 'the one who mustnt be named';
    }
    if(!mood)
    {
        mood = 'mysteriously well';
    }

    document.getElementById('name').value = '';
    document.getElementById('mood').value = '';

    return 'The Hazel Sloths welcome you, ' + name + '!  We\'re glad you are doing ' + mood + '!';
}

// FUNCTION 1. GET A MESSAGE FROM THE HAZEL SLOTH
function displayHazelSlothMessage(){
    alert('Thank you so much for being apart of the Hazel Sloth\'s snuggle!!!');
}

// FUNCTION 2. DISPLAYS IMAGE
function displayHazelSlothImage()
{
    //https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript

    // create a img element and set its attributes src to the image and alt to the text for screen readers
    let image = document.createElement("img");
    image.src = './images/transparent_sloth_resized.png';
    image.alt = 'Mr. Sloth living life.'

    // get the area wanted to place image and replace it's content with the image
    let imagePlaceholder = document.getElementById('image_placeholder');
    // if the div element is empty then display image, else remove image
    if (imagePlaceholder.innerHTML === "")
    {
        imagePlaceholder.appendChild(image);
    } 
    else 
    {
        imagePlaceholder.innerHTML = "";
    }
}

// FUNCTION 3. RESET VALUES FOR TOTAL COST AND TOTAL TAX COST
function resetValues()
{
    // reset checkboxes
    let checkboxes = document.querySelectorAll(".service_to_buy");
    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].checked = false;
    }

    // reset text box
    let costInput = document.getElementById('total_tax_cost');
    costInput.value = '';

    // reset output areas
    let outputArea1 = document.getElementById('totalCostMessageOutputArea');
    let outputArea2 = document.getElementById('totalTaxCostMessageOutputArea');
    outputArea1.innerHTML = "";
    outputArea2.innerHTML = "";

    return;
}


// FUNCTION 4. TO GET TOTAL COST OF PURCHASE
function displayTotalCost()
{
    // get total cost and area to display
    let outputText = getTotalCost();
    let outputArea = document.getElementById('totalCostMessageOutputArea');

    // display total to user
    outputArea.innerHTML = outputText;
    return ;
}

function getTotalCost()
{
    let princessBouncyHouse = document.getElementById('princess_bouncy_house');
    let basketballBouncyHouse = document.getElementById('basketball_bouncy_house');
    let ballPit = document.getElementById('ball_pit');
    let bozoTheClown = document.getElementById('bozo_the_clown');
    let cottonCandyMachine = document.getElementById('cotton_candy_machine');

    // based off the selection add up the total
    let total = 0;

    princessBouncyHouse.checked ? total += 100 : null;
    basketballBouncyHouse.checked ? total += 100 : null;
    ballPit.checked ? total += 50 : null;
    bozoTheClown.checked ? total += 56 : null;
    cottonCandyMachine.checked ? total += 20 : null;

    // return the text wanted to display
    return 'Total cost of selected items is $' + total + ' an hour.';
}

// FUNCTION 5. DISPLAY THE FINAL PRICE WITH TAX
function displayTaxTotalCost() 
{
    let outputArea = document.getElementById('totalTaxCostMessageOutputArea');
    let outputText = getTaxTotalCost();
    outputArea.innerHTML = outputText;
    return ;
}

function getTaxTotalCost()
{
    // get user input
    let cost = document.getElementById('total_tax_cost').value;

    // if user input is not a number prompt user to fix it
    if(isNaN(cost))
    {
        return 'Please enter a number.'
    }

    // calculate tax and total including tax
    let tax = cost * 0.0725;
    tax = tax.toFixed(2);
    let totalCost = Number(cost) + Number(tax);
    

    return 'The tax amount on the price provided is $' + tax + '. The total cost including tax is $' + totalCost + '.';
}