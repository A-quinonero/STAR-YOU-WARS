let nameSw = document.getElementById("name");
let btnResp = document.getElementById("btnResp");
let respVal = document.querySelectorAll(".respu1");
let respVal1 = document.querySelectorAll(".respu");
let respVal2 = document.querySelectorAll(".respu2");

let expliSw = document.getElementById('explicacion')
window.addEventListener("load", e => {
  console.log(location.search);
  mostrarHeroe(location.search.split("?score=")[1]);
});

function mostrarHeroe(counter) {
  
  switch (counter) {
    case '12':
      updateInforWithLoading()
      searchPal(),
      expliSw.innerText = `Eres una persona ambiciosa,
       con un gran control sobre tu poder.`,
      (document.getElementById("app").src = "images/palpatine-app");
      break;
    case '11':
      updateInforWithLoading()
      searchVader(),
      expliSw.innerText = `No hay nada que te pare,
       tu fuerza es tu coraje.`,
      (document.getElementById("app").src = "images/darthvader-app");
      break;
      case '10':
      updateInforWithLoading()
      searchMaul(),
      expliSw.innerText = `Tienes un poder increíble,
       pero es posible que mueras pronto.`,
      (document.getElementById("app").src = "images/maul-app");
      break;
      case '9':
      updateInforWithLoading()
      searchDooku(),
      expliSw.innerText = `Tienes la confianza necesaria,
      incluso para desafiar a tu maestro`,
      (document.getElementById("app").src = "images/dooku-app");
      break;
      case '8':
      updateInforWithLoading()
      searchBoba(),
      expliSw.innerText = `Eres un ídolo de masas,
       y un fantasma.`,
      (document.getElementById("app").src = "images/boba-app");
      break;
      case '7':
      updateInforWithLoading()
      searchGrievous(),
      expliSw.innerText = `Tienes muchos accesorios,
       aprende a usarlos.`,
      (document.getElementById("app").src = "images/grievous-app");
      break;
      case '6':
      updateInforWithLoading()
      searchJarjar(),
      expliSw.innerText = `Tienes un aspecto dudoso,
       todos te odiamos.`,
      (document.getElementById("app").src = "images/jarjar-app");
      break;
      case '5':
      updateInforWithLoading()
      searchWindu(),
      expliSw.innerText = `Posees una gran serenidad,
       pero intenta reírte un poco.`,
      (document.getElementById("app").src = "images/windu-app");
      break;
      case '4':
      updateInforWithLoading()
      searchObiwan(),
      expliSw.innerText = `Tienes un gran autocontrol,
       la fuerza está contigo.`,
      (document.getElementById("app").src = "images/obiwan-app");
      break;
      case '3':
      updateInforWithLoading()
      searchPadme(),
      expliSw.innerText = `Confías en los demás,
       demasiado a veces.`,
      (document.getElementById("app").src = "images/padme-app");
      break;

    case '2':
      updateInforWithLoading()
      searchR2d2(),
      expliSw.innerText = `Eres una persona equilibrada,
      aunque tienes mala leche.`,
      (document.getElementById("app").src = "images/r2d2");
      
      break;
      case '1':
      updateInforWithLoading()
      searchLeia(),
      expliSw.innerText = `Tienes las cosas claras,
       y luchas para conseguirlas.`,
      (document.getElementById("app").src = "images/leia-app");
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
function searchGrievous() {
  axios.get("https://swapi.co/api/people/79").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchDooku() {
  axios.get("https://swapi.co/api/people/67").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchMaul() {
  axios.get("https://swapi.co/api/people/44").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchBoba() {
  axios.get("https://swapi.co/api/people/22").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchBosk() {
  axios.get("https://swapi.co/api/people/24").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchObiwan() {
  axios.get("https://swapi.co/api/people/10").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchLeia() {
  axios.get("https://swapi.co/api/people/5").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchWindu() {
  axios.get("https://swapi.co/api/people/51").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchJarjar() {
  axios.get("https://swapi.co/api/people/36").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchPadme() {
  axios.get("https://swapi.co/api/people/35").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}
function searchLando() {
  axios.get("https://swapi.co/api/people/25").then(function(response) {
    updateData(response.data);
  });
}
function updateData(data) {
  nameSw.innerText = data.name;
}




function updateInforWithLoading(){
  nameSw.innerHTML = '<div class="spinner-border text-warning">'
  }
