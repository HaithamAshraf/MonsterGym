function validateForm() {
    var valid = true;
    if (document.getElementById("inputform").value == "") {
        alert("Email is empty");
        document.getElementById("inputform").focus();
        valid = false;
    }
    else if (document.getElementById("inputform").value.indexOf("@") == -1 || document.getElementById("inputform").value.indexOf(".com") == -1) {
        alert("Please Enter valid email, e.g...@yahoo.com");
        document.getElementById("inputform").focus();
        valid = false;
    }

    else if (document.getElementById("passwordform").value == "") {
        alert("Password is empty");
        document.getElementById("passwordform").focus();
        valid = false;
    }

    else if (valid) {
        window.location.href = 'Home.html';

    }
    return valid;
} 