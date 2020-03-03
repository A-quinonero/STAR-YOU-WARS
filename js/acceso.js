let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let logInButton = document.getElementById("signup-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementsByClassName("button")[0];
var currentUser
logInButton.addEventListener('click', store)

let usersDB = JSON.parse(localStorage.getItem('users'))
console.log(email.value)
    function store() {
        usersDB.forEach(user => {
               //console.log(user)
            if (user.email === email.value && user.password === password.value){
                alert(`                    Estás conectado. 
                  La fuerza está contigo.`);
              localStorage.setItem('currentUser', JSON.stringify(user))
            
              window.location.href =  "../index.html"
            
            }

        })
    }
   
        