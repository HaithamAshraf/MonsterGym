function price() {
    var type = document.getElementsByName("type");
    if (type[0].checked) {
        var val = type[0].value;
        document.getElementById("price").innerHTML = val;
    }
    else if (type[1].checked) {
        var val = type[1].value;
        document.getElementById("price").innerHTML = val;
    }
    else if (type[2].checked) {
        var val = type[2].value;
        document.getElementById("price").innerHTML = val;
    }
    else if (type[3].checked) {
        var val = type[3].value;
        document.getElementById("price").innerHTML = val;
    }

    else if (type[4].checked) {
        var val = type[4].value;
        document.getElementById("price").innerHTML = val;
    }
}

function submit1() {
    var valid = true;
    if (document.getElementById("name").value == "") {
        alert("Membership name is empty");
        document.getElementById("name").focus();
        valid = false;
    }
    else if (document.getElementById("date").value == "") {
        alert("Start date is empty");
        document.getElementById("date").focus();
        valid = false;
    }
    else if (valid) {
        var answer = confirm("Are you sure you want to continue booking?");
        if (answer) {
            alert("Booking successful");
            window.location.href = 'Home.html';
        }
        else  {
            window.location.href = 'Booking.html';
        }
    }
    return valid;
}