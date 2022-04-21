function phoneNumberValidation()
{
    let phoneNumber = document.getElementById("phone-number");
    phoneNumber = phoneNumber.value;

    console.log(phoneNumber);

    if(phoneNumber.length < 11)
    {
        alert('Please enter a valid phone number');
    }
    else
    {
        phoneNumber.setCustomValidity('');
    }
}