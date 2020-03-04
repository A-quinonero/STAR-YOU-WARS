
let nameChar = document.getElementById("name")
let height = document.getElementById("height")
let mass = document.getElementById("mass")
let birthYear = document.getElementById("birthyear")
let gender = document.getElementById("gender")
let btnRandom = document.getElementById('btnRandom')

function getInfo(){
    updateInforWithLoading()
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber
    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

function updateInfo(data){
nameChar.innerText = data.name;
height.innerText = ` Altura: ${data.height} Cm`
mass.innerText = ` Peso: ${data.mass} Kg`
birthYear.innerText = ` Año de nacimiento: ${data.birth_year}`
gender.innerText = ` Género: ${data.gender}`
}

function updateInfoWithError(){
    nameChar.innerText = ` ¡Oh no! este personaje no está disponible!`
    height.innerText = ''
    mass.innerText = ''
    birthYear.innerText = ''
    gender.innerText = ''
    }

    function updateInforWithLoading(){
    nameChar.innerHTML = '<div class="spinner-border text-warning">'
    height.innerText = ""
    mass.innerText = ""
    birthYear.innerText = ""
    gender.innerText = ''
    }
    


btnRandom.addEventListener('click', getInfo)