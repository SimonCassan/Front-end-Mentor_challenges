const btnSubmit = document.querySelector('.btn-green');
const firstnameField = document.querySelector('#firstname');
const firstnameError = firstnameField.parentElement;
const lastnameField = document.querySelector('#lastname');
const lastnameError = lastnameField.parentElement;
const emailField = document.querySelector('#email');
const emailError = emailField.parentElement;
const msgField = document.querySelector('#msg');
const msgError = msgField.parentElement;
const checkBoxField = document.querySelector('#consent');
const checkBoxError = checkBoxField.parentElement;
const cardSuccess = document.querySelector('.card');


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const isFnameValid = checkValue(firstnameField);
    const isLnameValid = checkValue(lastnameField)
    const isEmailValid = checkValueEmail(emailField)
    const isMsgValid = checkValue(msgField);
    const isCheckboxValid = checkValueCheckbox(checkBoxField);
    console.log(isFnameValid, isLnameValid, isEmailValid, isMsgValid);
    if (isFnameValid && isLnameValid && isEmailValid && isMsgValid && isCheckboxValid) {
        cardSuccess.classList.add('active');
        setTimeout(() => {
            cardSuccess.classList.remove('active');
        }, 3500);
    }
})


firstnameField.addEventListener('input', () => {
    firstnameError.classList.remove('active');
})

lastnameField.addEventListener('input', () => {
    lastnameError.classList.remove('active');
})

emailField.addEventListener('input', () => {
    emailError.classList.remove('active');
    emailError.querySelector('.error-text').textContent = "This field is required";
})

msgField.addEventListener('input', () => {
    msgError.classList.remove('active');
})

checkBoxField.addEventListener('change', () => {
    checkBoxError.classList.remove('active');
})



function checkValue(dataField) {
    if (dataField.value.trim() === "") {
        dataField.parentElement.classList.add('active');
        return false;
    }
    else
        return true;
}


function checkValueCheckbox(dataField) {
    if (dataField.checked)
        return true;
    else {
        dataField.parentElement.classList.add('active');
        return false;
    }
}

function checkValueEmail(dataField) {
    if (checkValue(dataField)) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(dataField.value.trim())) {
            dataField.parentElement.classList.add('active');
            dataField.nextElementSibling.textContent = "Please enter a valid email address";
            return false;
        }
        else
            return true;
    }
    else
        return false;
}