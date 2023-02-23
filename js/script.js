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
  if (checkWarning() == false) {
    user = {
      name: nameInput.value,
      password: passwordInput.value,
    };

    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
  }
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
