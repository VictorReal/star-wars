const url='https://swapi.dev/api/people/' // 1
let characters = [] // 2

fetch(url, { // 3
  method: 'GET',
}).then(function(response){
    return response.json() // 6
}).then(function(data){
    characters = data.results // 7
    renderCharacters(app, characters) // 8
})

// 4 function initialization
function renderCharacters(app, characters){ 
    for(const character of characters){ // 9
        const characterContainer = document.createElement('div') // 9.1
        characterContainer.classList.add('container')
        characterContainer.innerHTML = `
            <p class="name"> ${character.name} </p>
            <p> Height: ${character.height}cm </p>
            <p> Mass: ${character.mass}kg </p>
            <p> Hair: ${character.hair_color}</p>
            <p> Skin: ${character.skin_color}</p>
            <p> Eye color: ${character.eye_color}</p>
            <p> Birth year: ${character.birth_year}</p>
            <p> Gender: ${character.gender}</p>
            <p id="homeworld"> Homeworld: </p>
            <p> Films: ${character.films[0]}</p>
            <p> Species: ${character.species}</p>
            <p> Vehicles: ${character.vehicles}</p>
            <p> Starships: ${character.starships[0]}</p>
        `
        app.appendChild(characterContainer) // 9.8
    }
   
}

const app = document.getElementById('app') // 5


/*

fetch('https://swapi.dev/api/planets/', {
    method: 'GET',
  }).then(function(response){
      return response.json()
  }).then(function(data){
      planets = data.results
      renderCharacters(homeworld, planets)
        console.log('planets', planets)
  })
/*

  fetch('https://api.sampleapis.com/simpsons/characters')
  .then(function(response){
      return response.json ();  
  })
  .then(function(data){
      simpsonsCharacters = data;
      console.log('Simpsons characters', simpsonsCharacters)
  }) 
  
  
  
  
  fetch(url, { // 3
  method: 'GET',
}).then(function(response){
    return response.json() // 6
}).then(function(data){
    characters = data.results // 7
    renderCharacters(app, characters) // 8
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */