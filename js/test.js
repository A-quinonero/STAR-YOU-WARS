let button = document.querySelector('#button')
let nameSw = document.querySelector('#name')
let luke = ''
//PALPATINE
function searchPal(){
    axios.get('https://swapi.co/api/people/21').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name
}

//LUKE
function searchLuke(){
    axios.get('https://swapi.co/api/people/1').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}
//VADER
function searchVader(){
    axios.get('https://swapi.co/api/people/4').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}
//HAN SOLO
function searchHan(){
    axios.get('https://swapi.co/api/people/10').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}
//YODA
function searchYoda(){
    axios.get('https://swapi.co/api/people/20').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}
//R2D2
function searchR2d2(){
    axios.get('https://swapi.co/api/people/3').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}
//CHEWI
function searchChewi(){
    axios.get('https://swapi.co/api/people/13').then(function(response){
        updateData(response.data)
    })
}
function updateData(data){
    nameSw.innerText = data.name

}

searchVader() 

function putResult(){
switch(respVal){
case 6 :
let vaderSrc = document.getElementById("app").src = "images/darthvader-app";
break;
case 5 :
let palpatineSrc = document.getElementById("app").src = "images/palpatine-app";
break;
case 4 :
let hanSrc = document.getElementById("app").src = "images/han-app";
break;
case 3 :
let r2d2Src = document.getElementById("app").src = "images/r2d2";
break;
case 2 :
let lukeSrc = document.getElementById("app").src = "images/luke-app";
break;
case 1 :
let chewiSrc = document.getElementById("app").src = "images/yoda-app";

break;
default :
let yodaSrc = document.getElementById("app").src = "images/yoda-app";
}
}


let respVal = document.querySelectorAll('#respu1')[0].value
console.log(respVal)

function  contResp() {
    var contador = 0;
    document.getElementById('respu1').value.onclick = function () {
        contador++;
        respVal + contador
        return respVal
    }
}
let btnResp = document.getElementById('btnResp')
btnResp.addEventListener('click', contResp)

console.log(respVal)