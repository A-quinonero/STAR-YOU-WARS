let nameSw = document.getElementById("name");
let btnResp = document.getElementById("btnResp");
let respVal = document.querySelectorAll(".respu1");
let respVal1 = document.querySelectorAll(".respu");
let expliSw = document.getElementById('explicacion')
window.addEventListener("load", e => {
  console.log(location.search);
  mostrarHeroe(location.search.split("?score=")[1]);
});

function mostrarHeroe(counter) {
  
  switch (counter) {
    case '6':
      updateInforWithLoading()
      searchPal(),
      expliSw.innerText = `Eres una persona ambiciosa,
       con un gran control sobre tu poder.`,
      (document.getElementById("app").src = "images/palpatine-app");
      break;
    case '4':
      updateInforWithLoading()
      searchVader(),
      expliSw.innerText = `No hay nada que te pare,
       tu fuerza es tu coraje.`,
      (document.getElementById("app").src = "images/darthvader-app");
      break;
    case '2':
      updateInforWithLoading()
      searchR2d2(),
      expliSw.innerText = `Eres una persona equilibrada,
      aunque tienes mala leche.`,
      (document.getElementById("app").src = "images/r2d2");
      
      break;
    case '0':
      updateInforWithLoading()
      searchHan(),
      expliSw.innerText = `Eres muy sexy,
      pero deberías pensar más en los demás.`,
      (document.getElementById("app").src = "images/han-app");
      break;
    case '-2':
      updateInforWithLoading()
       searchLuke(),
       expliSw.innerText = `Tienes mucho potencial,
       tu fuerza está en tu corazón.`,
       (document.getElementById("app").src = "images/luke-app")
      break;
    case '-4':
      updateInforWithLoading()
       searchChewi(),
       expliSw.innerText = `Eres un gran aliado,
       sin tu ayuda nada sería posible.`,
       (document.getElementById("app").src = "images/chewi-app");
      break;
    case '-6':
      updateInforWithLoading()
       searchYoda(),
       expliSw.innerText = `Eres una persona sabia,
       nadie puede dudar de tu conocimiento.`,
       (document.getElementById("app").src = "images/yoda-app");
       break;

  }
}

function searchPal() {
  axios.get("https://swapi.co/api/people/21").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchLuke() {
  axios.get("https://swapi.co/api/people/1").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchVader() {
  axios.get("https://swapi.co/api/people/4").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchChewi() {
  axios.get("https://swapi.co/api/people/13").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchHan() {
  axios.get("https://swapi.co/api/people/14").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchYoda() {
  axios.get("https://swapi.co/api/people/20").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}

function searchR2d2() {
  axios.get("https://swapi.co/api/people/3").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function updateInforWithLoading(){
  nameSw.innerHTML = '<div class="spinner-border text-warning">'
  }