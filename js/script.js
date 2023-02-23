var nameInput = document.getElementById("nameInput");
var passwordInput = document.getElementById("passwordInput");
var emailInput = document.getElementById("emailInput");

var allUsers = [];

function checkWarning() {
  flag = false;
  function displayUserNameWarning() {
    let userNameWarningMsg = document.getElementById("userNameWarningMsg");
    userNameWarningMsg.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    Enter Username
  </div>`;
  }

  function displayEmailWarning() {
    let emailWarning = document.getElementById("emailWarningMsg");
    emailWarning.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    Enter Email
  </div>`;
  }

  function displayPasswordWarning() {
    let passwordWarningMsg = document.getElementById("passwordWarningMsg");
    passwordWarningMsg.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    Enter password
  </div>`;
  }

  if (nameInput.value == "") {
    displayUserNameWarning();
    flag = true;
  }

  if (passwordInput.value == "") {
    displayPasswordWarning();
    flag = true;
  }
  if (emailInput.value == "") {
    displayEmailWarning();
    flag = true;
  }

  return flag;
}

function createNewUser() {
  if (checkWarning() == false  && validation() ==true ) {
    user = {
      name: nameInput.value,
      password: passwordInput.value,
    };

    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
  }
}

function validation() {
  flag = false;
  if (userNameValidation(nameInput.value) == false) {
    let userNameWarningMsg = document.getElementById("userNameWarningMsg");
    userNameWarningMsg.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    User Name invalid
  </div>`;
    flag = false;
  }

  if (emailValidation(emailInput.value) == false) {
    let emailWarning = document.getElementById("emailWarningMsg");
    emailWarning.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    email invalid
  </div>`;
    flag = false;
  }

  if (passwordValidation(passwordInput.value) == false) {
    let passwordWarningMsg = document.getElementById("passwordWarningMsg");
    passwordWarningMsg.innerHTML = `<div class="bg-danger rounded-2 text-center text-white mt-2">
    password invalid
  </div>`;
    console.log("dasdsadsadsadasd")
    flag = false;
  }

  return true;
}

function userNameValidation(name) {
  var nameValidation = /^[A-z0-9]{3,16}$/;
  return nameValidation.test(name);
}
function emailValidation(email) {
  var nameValidation =
    /^[A-z0-9]{3,16}(.|_)[A-z0-9]{3,16}(.|_)[A-z0-9]{3,16}?(.|_)?@(gmail|yahoo|hotmail).com$/gm;
  return nameValidation.test(email);
}

function passwordValidation(password) {
  var nameValidation =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
  return nameValidation.test(password);
}

function checkIfUserExist(userName) {
  var flag = false;
  for (var index = 0; index < allUsers.length; index++) {
    if (allUsers[i].name.toLowerCase() == userName.toLowerCase()) {
      flag = true;
      break;
    }
  }
}
