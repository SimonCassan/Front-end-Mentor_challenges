const form = document.getElementById('form');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('error-message');
const card = document.getElementById("card");
const successMsg = document.getElementById('success-message');
const dismissBtn = document.getElementById('dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    email = emailField.value.trim();
    const isValid = validateField(email);
    if (isValid) {
        successMsg.classList.add('active');
        card.classList.remove('active');
    }
    else
        emailField.classList.add('invalid');
})
emailField.addEventListener('input', () => {
    emailField.classList.remove('invalid');
})
dismissBtn.addEventListener('click', () => {
    successMsg.classList.remove('active');
    card.classList.add('active');
})

function validateField(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorMsg.textContent = "Field required";
        return false;
    }
    else if (!regexEmail.test(email)) {
        errorMsg.textContent = "Valid Email required"
        return false;
    }
    else {
        errorMsg.textContent = "";
        return true;
    }
}