const person = [];

const salary = [];

// Add user input to person and salary array
function addSalary() 
{
    let selectedEmployee = document.getElementById('employee_selected').value;
    let salaryInput = document.getElementById('salary').value;

    // check if user input is valid (if valid put into array)
    if(inputValidation(salaryInput) && selectedEmployee != "none"  && salaryInput != "")
    {
        salaryInput = Number(salaryInput);
        salaryInput = salaryInput.toFixed(2);

        // if employee is not in the array already then add into array else update salary
        if(person.indexOf(selectedEmployee) == -1)
        {
            salary.push(salaryInput);
            person.push(selectedEmployee);
        }
        else
        {
            let index = person.indexOf(selectedEmployee);
            salary[index] = salaryInput;
        }
        console.log(person);
        console.log(salary);
    }
    else
    {
        alert('Please input a valid salary');
    }

    document.getElementById('employee_selected').focus();
    document.getElementById('employee_selected').select();
}

// Check if user input is valid
function inputValidation(input)
{
    input = Number(input)

    if(Number.isNaN(input) || input < 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

// Displays the average and highest salary
function displayResults()
{
    // get area to display
    let outputArea = document.getElementById('results');

    // calculate avareage and highest salary
    let sum = calculateSum();
    let averageSalary = sum / salary.length;
    averageSalary = averageSalary.toFixed(2); // fix average to 2 decimal points

    // get index of highest salary in the salary array
    let index = calculateHighestSalaryIndex();

    // retrieve highest salary and employee with index calculated
    let highestSalary = salary[index];
    let highestPaidEmployee = person[index];

    // create output statements
    let headerStatement = '<h2>Overall Salary Information</h2>';
    let salaryStatement = '<p>The average salary pay is $' + averageSalary + '. ' + highestPaidEmployee + 'is the highest paid employee with a $' + highestSalary + ' salary. </p>';

    // if the array is not empty then display average and highest salary else ask user to input information
    if(sum != 0)
    {
        outputArea.innerHTML = headerStatement + salaryStatement;
    }
    else
    {
        outputArea.innerHTML = headerStatement + '<p>No employees or salaries have been added. Please add some!</p>'
    }

    document.getElementById('employee_selected').focus();
    document.getElementById('employee_selected').select();
    return;

}

// calculate the sum of all current items in salary array
function calculateSum()
{
    let sum = 0.0;

    for(let i = 0; i < salary.length; i++)
    {
        
        sum = sum + parseFloat(salary[i]);
    }
    return sum;
}

// calculate the highest salary and return its index number
function calculateHighestSalaryIndex()
{
    let highestSalary = 0.0;
    let counterAtHighest = 0;
    for(let i = 0; i < salary.length; i++)
    {
        if(highestSalary < salary[i])
        {
            highestSalary = salary[i];
            counterAtHighest = i;
        }
    }
    return counterAtHighest;
}

// display table data of users
function displaySalary()
{
    let outputArea = document.getElementById('results_table');
    let outputHeader = document.getElementById('results_table_header');

    outputHeader.innerHTML = '<h2>Employee and Salary Table</h2>';

    // create the head of the table
    outputArea.innerHTML = '<thead><tr><th>Employee</th><th>Salary</th></tr></thead>';
    
    // input table data
    for(let i = 0; i < salary.length; i++)
    {
        outputArea.innerHTML += '<tr><td>' + person[i] + '</td><td>$' + salary[i] + '</td></tr>';
    }
    
    document.getElementById('employee_selected').focus();
    document.getElementById('employee_selected').select();
    return;
}