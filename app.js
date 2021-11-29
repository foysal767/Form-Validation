//Catching the DOM elements
const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordTwo = document.querySelector('#passwordTwo');



//Display error
function displayError(element, errorMsg){
    element.parentElement.className = 'form-control error';
    element.parentElement.querySelector('small').innerText = errorMsg;
}

//Display Success
function displaySuccess(element){
    element.parentElement.className = 'form-control success';

}
//Validet Username
function validateUserName(userName, minLen, maxLen){
    if(userName.value.length < minLen){
        displayError(userName, "Username must be at least " + minLen + " characters long!");
        //userName.parentElement.className = 'form-control error';
        //const small = userName.parentElement.querySelector('small');
        //small.innerText = "Username must be at least " + minLen + " characters long!";
    }
    else if(userName.value.length > maxLen){
        displayError(userName, "Username must be less than " + maxLen + " characters long!")
        //userName.parentElement.className = 'form-control error';
        //const small = userName.parentElement.querySelector('small');
        //small.innerText = "Username must be less than " + maxLen + " characters long!";
    }
    else{
        displaySuccess(userName);
        //userName.parentElement.className = 'form-control success';
    }
}

//Validate Email address
function validateEmail(input){
    if(input.value == ''){
        displayError(input, "Please enter your email address");
    }
    else if(!input.value.match(/\S+@\S+\.\S/)){
        displayError(input, 'Please enter a valid Email Address!')
    }
    else{
        displaySuccess(input);
    }
}

//Validated password
function validatePassword(input){
    if(input.value == ''){
        displayError(input, 'Password field can not be empty!');
    }
    else if(!input.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-z]{8,}$/)){
        displayError(input, 'Must contain 1 capital ,1 digit & 8 characters long!');
    }else{
        displaySuccess(input);
    }
}

//Matching password
function matchPassword(inputOne, inputTwo){
    if(inputTwo.value == ''){
        displayError(inputTwo, 'Field can not be empty!');
    }
    else if(inputOne.value != inputTwo.value){
        displayError(inputTwo, 'Password did not match!');
    }
    else{
        displaySuccess(inputTwo);
    }
}
//Form Submit Event
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateUserName(userName, 5, 15);
    validateEmail(email);
    validatePassword(password);
    matchPassword(password, passwordTwo);
})


