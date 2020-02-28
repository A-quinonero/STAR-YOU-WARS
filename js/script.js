
fetch("https://swapi.co/api/people/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let starWarsChar = myJson.results
    console.log(starWarsChar)
  });
  

