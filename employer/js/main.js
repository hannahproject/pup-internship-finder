var fullName = document.getElementById('name');
var companyName = document.getElementById('company');
var email = document.getElementById('email');
var phoneNum = document.getElementById('phonenum');
var description = document.getElementById('desc');
var answer;

function displayName () {
    answer = prompt ("Enter your Full Name: ");

    if (answer != null) {
        fullName.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayCompany () {
    answer = prompt ("Enter your Company Name: ");

    if (answer != null) {
        companyName.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayEmail () {
    answer = prompt ("Enter your Email: ");

    if (answer != null) {
        email.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayPhoneNum () {
    answer = prompt ("Enter your Phone Number: ");

    if (answer != null) {
        phoneNum.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayDescription () {
    answer = prompt ("Enter Company Description: ");

    if (answer != null) {
        description.textContent = answer;
    } else {
        noAnswer();
    }
}

function noAnswer() {
    alert ("You didn't enter anything.");
}



