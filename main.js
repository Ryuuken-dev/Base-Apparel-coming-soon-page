const acceptButton = document.querySelector('button');
const dataInput = document.getElementsByClassName('email__details--js')[0];
const error = document.querySelector('.errorBox');
const errorText = document.querySelector('.errorBox__errorMessage');


const showError = (message) => {
    error.style.display = "flex";
    errorText.textContent = message;
};

dataInput.addEventListener('input', () => {
    if (!(dataInput.value) || dataInput.value) {
        error.style.display = "none";
    }
});

const emails = ["o2", "gmail", "outlook", "interia", "onet", "wp"];
   
const confirmEmail = function (e) {
    e.preventDefault();
    const userData = dataInput.value;
    const lastString = userData.substr(userData.indexOf(`@`));
    dataModified = lastString.substr(1, lastString.length-4);
    if (userData.includes('@') && (userData) && !(userData.endsWith('@')) && !(userData.startsWith('@')) && (lastString.includes('.')) && (lastString.includes('pl')) && (emails.includes(dataModified))) {
        return;
    } else if (!(userData)) {
        showError("To pole nie może być puste");
    } else if (!(userData.includes('@'))) {
        showError(`Nazwa musi zawierać znak "@"`);
    } else if(userData.endsWith('@')) {
        showError(`Adres e-mail jest niepełny, podaj część po znaku "@"`);
    } else if(userData.startsWith('@')) {
        showError(`Podaj część przed znakiem "@"`); 
    } else if(!(lastString.includes('.')) || !(lastString.includes('pl')) || !(emails.includes(dataModified))) {
        showError(`Tekst występujący po znaku "@" ma niewłaściwy format`);
    } 
        
    

}

acceptButton.addEventListener('click', confirmEmail);


