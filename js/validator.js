function validateForm() {
  var email = document.getElementById("modlgn_username").value;
  var password = document.getElementById("modlgn_passwd").value;

  if(email == "") {
    alert("Email is empty, please fill something");
    return false;
  } else if (password == "") {
    alert("please insert in this password section");
    return false;
  } else if(email="testuser") {
    if(password == "123") {
      alert("You have succesfully signed in");
      return true;
    } else {
      alert("Wrong User");
      return false;
    }
  }
}

function validateRegisterForm() {
  var email = document.getElementById("email").value;
  var firstName = document.getElementById("firstName").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var lastName = document.getElementById("lastName").value;

  if(email == "") {
    alert("Email is empty, please fill something");
  } else if(firstName == ""){
    alert("please insert in this firstName section");
  } else if(password == "") {
    alert("please insert in this password section");
  } else if(confirmPassword == "") {
    alert("please insert in this confirm password  section");
  } else if(lastName == "") {
    alert("please insert in this lastName section");
  } else {
    if(password != confirmPassword) {
      alert("Password does not match");
    } else {
      alert("Registeration succesfully " + firstName + " " + lastName);
    }
  }
}
