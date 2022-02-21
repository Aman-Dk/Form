function ValidateForm() {
    var name = document.forms["RegistrationForm"]["name"];
    var email = document.forms["RegistrationForm"]["email"];
    var phone = document.forms["RegistrationForm"]["phone"];
    var password = document.forms["RegistrationForm"]["password"];
    var city = document.forms["RegistrationForm"]["city"];
    var address = document.forms["RegistrationForm"]["address"];

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.value == "") {
        alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (!email.value.match(mailformat)) {
        alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (password.value == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (city.selectedIndex < 1) {
        alert("Please enter your city.");
        city.focus();
        return false;
    }

    if (phone.value == "") {
        alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }

    if (address.value == "") {
        alert("Please enter your address.");
        address.focus();
        return false;
    }

    return alert("Form submitted successfully");
}
