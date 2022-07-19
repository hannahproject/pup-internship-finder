//SIGNUP PAGE ELEMENTS
var password = document.getElementById ('password');
var confirmPass = document.getElementById ('confirm-password');
var submit = document.getElementById ('submit').addEventListener('click', passwordVerification);


//SIGNUP VERIFICATION
function passwordVerification () {

    var passValue = password.value.trim();
    var pass2Value = confirmPass.value.trim();
    //trim() REMOVES EXTRA WHITESPACES

    if (passValue==='') {
        blankInputWarning("Field cannot be left blank.");

        // PREVENTS THE PAGE FROM RELOADING AND CLEARNING THE INPUT FIELDS
        event.preventDefault();
    }

    else if (pass2Value==='') {
        blankInputWarning("Field cannot be left blank.");
        event.preventDefault();
    }

    else if (pass2Value != passValue) {
        ifDoesNotMatch("Your passwords do not match.");
        event.preventDefault();
    }
    
    else {
        ifMatch("Account created successfully.");
        //THE USER MUST BE REDIRECTED TO THE HOME PAGE AFTER THIS
    }
}

//POP-UP WINDOW MESSAGES
function blankInputWarning(message) {
    alert (message);
}

function ifMatch(message) {
    alert(message);
}

function ifDoesNotMatch(message) {
    alert(message);
}
