function validateForm2() {
    var valid = true;
    if (document.getElementById("firstname").value == "") {
        alert("Firstname is empty");
        document.getElementById("firstname").focus();
        valid = false;
    }
    else if (document.getElementById("lastname").value == "") {
        alert("Lastname is empty");
        document.getElementById("lastname").focus();
        valid = false;
    }
    else if (document.getElementById("inputform").value == "") {
        alert("Email is empty");
        document.getElementById("inputform").focus();
        valid = false;
    }
    else if (document.getElementById("inputform").value.indexOf("@") == -1 || document.getElementById("inputform").value.indexOf(".com") == -1) {
        alert("Please Enter valid email, e.g...@yahoo.com");
        document.getElementById("inputform").focus();
        valid = false;
    }
    else if (document.getElementById("password").value == "") {
        alert("Password is empty");
        document.getElementById("password").focus();
        valid = false;
    }
    else if (document.getElementById("confirm-password").value == "") {
        alert("Confirm password is empty");
        document.getElementById("confirm-password").focus();
        valid = false;
    }
    else if (document.getElementById("confirm-password").value != document.getElementById("password").value) {
        alert("You entered an incorrect password,please try again");
        document.getElementById("confirm-password").focus();
        valid = false;
    }
    else if (document.getElementById("birthdaydate").value == "") {
        alert("Brithday date is empty");
        document.getElementById("birthdaydate").focus();
        valid = false;
    }
    else if (valid) {
        alert("The operation was successful");
        window.location.href = 'Login.html';

    }
    return valid;
} 