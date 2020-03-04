class Validator {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  checkUserName() {
    return this.userName ? true : false;
  }

  checkEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email)
      ? true
      : false;
  }

  checkPassword() {
    if (!this.password) {
      return false;
    } else if (this.password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  errorCreator(message, location) {
    let div = document.createElement("div");
    div.setAttribute("class", "error");
    div.innerHTML = message;
    form.insertBefore(div, location);
  }

  deleteErrors() {
    let errors = [...document.getElementsByClassName("error")];
    errors ? errors.forEach(error => error.remove()) : null;
  }
}

class SignUpValidator extends Validator {
  constructor(userName, email, password, repeatPassword) {
    super(userName, email, password);
    this.repeatPassword = repeatPassword;
  }

  checkEmailInDB(usersDB) {
    console.log("checking...");
    let userExists = true;
    if (!usersDB) {
      console.log("true");
      return true;
    } else {
      //     console.log('falsooo')
      usersDB.forEach(user => {
        //console.log('======>',user.email, this.email)
        if (user.email === this.email) {
          console.log("email", user.email, this.email);
          userExists = false;
        }
      });
      // }
    }
    return userExists;
  }

  checkRepeatPassword() {
    if (this.password === this.repeatPassword) {
      return true;
    } else {
      return false;
    }
  }
}

class LogInValidator extends Validator {
  constructor(userName, email, password) {
    super(email, password);
  }

  checkEmailInDB(userDB) {
      let emailExists = false;
    if (!userDB) {
      return false;
    } else {
      userDB.forEach(user => {
        if (user.email === email.value) {
          emailExists = true;
        }
      });
    }
    return emailExists;
  }
  checkPasswordInDB(userDB) {
      let passwordExists = false;
    if (!userDB) {
      return false;
    } else {
      userDB.forEach(user => {
        if (user.password === password.value) {
          passwordExists = true;
        }
      });
    }
    return passwordExists;
  }
}
