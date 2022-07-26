var fullName = document.getElementById('name');
var studnumber = document.getElementById('studnumber');
var course = document.getElementById('course');
var age = document.getElementById('age');
var gender = document.getElementById('gender');
var email = document.getElementById('email');
var phoneNum = document.getElementById('phonenum');
var answer;

function displayName () {
    answer = prompt ("Enter your Full Name: ");

    if (answer != null) {
        fullName.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayStudNumber () {
    answer = prompt ("Enter your Student Number: ");

    if (answer != null) {
        studnumber.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayCourse () {
    answer = prompt ("Enter your Course: ");

    if (answer != null) {
        course.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayAge () {
    answer = prompt ("Enter your Age: ");

    if (answer != null) {
        age.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayGender () {
    answer = prompt ("Enter Gender: ");

    if (answer != null) {
        gender.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayEmail () {
    answer = prompt ("Enter Email: ");

    if (answer != null) {
        email.textContent = answer;
    } else {
        noAnswer();
    }
}

function displayPhoneNum () {
    answer = prompt ("Enter Phone Number: ");

    if (answer != null) {
        phoneNum.textContent = answer;
    } else {
        noAnswer();
    }

}
function noAnswer() {
    alert ("You didn't enter anything.");
}