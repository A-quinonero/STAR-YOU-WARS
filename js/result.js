let nameSw = document.getElementById("name");
let btnResp = document.getElementById("btnResp");
let respVal = document.querySelectorAll(".respu1");
window.addEventListener("load", e => {
  console.log(location.search);
  mostrarHeroe(location.search.split("?score=")[1]);
});

function mostrarHeroe(counter) {
  
  switch (counter) {
    case '6':
      (document.getElementById("app").src = "images/darthvader-app"),
        searchVader();
      break;
    case '5':
      (document.getElementById("app").src = "images/palpatine-app"),
        searchPal();
      break;
    case '4':
      (document.getElementById("app").src = "images/r2d2"), searchR2d2();
      break;
    case '3':
      (document.getElementById("app").src = "images/han-app"), searchHan();
      break;
    case '2':
      (document.getElementById("app").src = "images/luke-app"), searchLuke();
      break;
    case '1':
      (document.getElementById("app").src = "images/chewi-app"), searchChewi();
      break;
    case 0:
      (document.getElementById("app").src = "images/yoda-app"), searchYoda();
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
