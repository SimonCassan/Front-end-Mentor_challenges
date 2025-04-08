const form = document.getElementById('form');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('error-message');
const card = document.getElementById("card");
const successMsg = document.getElementById('success-message');
const dismissBtn = document.getElementById('dismiss');
const submitBtn = document.getElementById('submit');

// Empeche la soumission directe du formulaire, vérifie la validité de l'email, affiche le message de succès si oui
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmailField()) {
        card.classList.remove('active');
        successMsg.classList.add('active');
    }
})

// vide le message d'erreur quand on saisit quelque chose
emailField.addEventListener('input', clearError);
// lance la vérification si le champ email perd le focus
emailField.addEventListener('blur', validateEmailField);

// cache le message de succès et reaffiche la carte quand on clique sur le bouton
dismissBtn.addEventListener('click', () => {
    successMsg.classList.remove('active');
    card.classList.add('active');
})


function validateEmailField() {
    const email = emailField.value.trim();
    if (email === "") {
        showError("Field required");
        return false;
    }
    else if (!isEmailValid(email)) {
        showError("Valid Email required");
        return false;
    }
    else {
        clearError();
        return true;
    }
}
function isEmailValid(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function showError(message) {
    errorMsg.textContent = message;
    emailField.classList.add('invalid');
    submitBtn.classList.add('button-invalid');
}

function clearError() {
    errorMsg.textContent = "";
    emailField.classList.remove('invalid');
    submitBtn.classList.remove('button-invalid');
}