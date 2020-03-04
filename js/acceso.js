let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let logInButton = document.getElementById("signup-button");
let form = document.getElementsByClassName("login-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementsByClassName("button")[0];
var currentUser

logInButton.addEventListener('click', function(event){
    event.preventDefault();
    deleteErrors()
    checkLogUser()
})

let usersDB = JSON.parse(localStorage.getItem('users'))

function checkLogUser() {
    let loginUpValidator = new LogInValidator(email.value, password.value);
    
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let logUser = true;
    usersDB.forEach(user => {
        //console.log(user)
     if (user.email === email.value && user.password === password.value){
         alert(`                    Estás conectado. 
           La fuerza está contigo.`);
       localStorage.setItem('currentUser', JSON.stringify(user))
     
       window.location.href =  "index.html"
     
     }

 })
    if(!loginUpValidator.checkPasswordInDB(usersDB)){
        loginUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
        logUser=false
    }
  
    if (!loginUpValidator.checkEmailInDB(usersDB)){
        loginUpValidator.errorCreator("Email incorrecto", email)
        logUser=false
    }

    return logUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}


    
       
    
        