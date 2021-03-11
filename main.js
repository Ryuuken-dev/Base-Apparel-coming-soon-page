const acceptButton = document.querySelector('button');
const dataInput = document.getElementsByClassName('email__details--js')[0];
const error = document.querySelector('.errorBox');
const errorText = document.querySelector('.errorBox__errorMessage');


const showError = (message) => {
    error.style.display="flex";
    errorText.textContent = message;
};

dataInput.addEventListener('input', ()=> {
    if(!(dataInput.value) || dataInput.value) {
        error.style.display = "none";
    }
});

const confirmEmail = function(e) {
    e.preventDefault();
    const userData = dataInput.value;
    if(userData.includes('@') && (userData) && !(userData.endsWith('@'))) {
        return
    } else if(!(userData)) {
        showError("To pole nie może być puste");
    } else if(!(userData.includes('@'))) {
        showError(`Nazwa musi zawierać znak "@"`);
    } else {
        showError(`Adres e-mail jest niepełny, podaj część po znaku "@"`);
    }
    
}

acceptButton.addEventListener('click', confirmEmail);

