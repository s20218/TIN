function validate() {
    let result = document.getElementById("result");
    if (validateForm()) {
        result.textContent = document.getElementById("hours").value + ' hours are logged.';
    } else { 
        result.textContent = 'Oops! Something is wrong.' 
    }
}

function validateForm() {
    let flag = true;
    let email = document.getElementById("email");
    let hours = document.getElementById("hours");
    let emailValidator = document.getElementById("email-validator");
    let numberValidator = document.getElementById("number-validator");
    let regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!regex.test(email.value)) {
        emailValidator.textContent = 'Not valid e-mail address';
        email.style.borderColor = 'red';
        flag = false;
    }
    else {
        emailValidator.textContent = '';
        email.style.borderColor = 'green';
    }

    if (hours.value === '') {
        numberValidator.textContent = 'Enter hours';
        hours.style.borderColor = 'red';
        flag = false;
    }
    else{
        numberValidator.textContent = '';
        hours.style.borderColor = 'green';
    }
    return flag;
}
