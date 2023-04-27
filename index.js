const url = 'https://swapi.dev/api/people/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    renderCharacters(characters);
  })

function renderCharacters(characters) {
  characters.forEach(character => {
    const characterContainer = document.createElement('div');
    characterContainer.classList.add('container');

    fetch(character.homeworld)
      .then(response => response.json())
      .then(homeworld => {
        const homeworldElem = characterContainer.querySelector('.homeworld');
        homeworldElem.textContent = `Homeworld: ${homeworld.name}`;
      });
     
    fetch(character.species)
      .then(response => response.json())
      .then(species => {
        const speciesElem = characterContainer.querySelector('.species');
        speciesElem.textContent = `Species: ${species.name}`;
      });

    character.films.forEach(filmUrl => {
      fetch(filmUrl)
        .then(response => response.json())
        .then(film => {
          const filmsElem = characterContainer.querySelector('.films');
          const filmElem = document.createElement('li');
          filmElem.textContent = film.title;
          filmsElem.appendChild(filmElem);
        })
    });

    Promise.all(character.vehicles.map(vehicleUrl =>
      fetch(vehicleUrl)
        .then(response => response.json())
    )).then(vehicles => {
      const vehiclesElem = characterContainer.querySelector('.vehicles');
      vehicles.forEach(vehicle => {
        const vehicleElem = document.createElement('li');
        vehicleElem.textContent = vehicle.name;
        vehiclesElem.appendChild(vehicleElem);
      });
    });

    Promise.all(character.starships.map(starshipUrl =>
      fetch(starshipUrl)
        .then(response => response.json())
    )).then(starships => {
      const starshipsElem = characterContainer.querySelector('.starships');
      starships.forEach(starship => {
        const starshipElem = document.createElement('li');
        starshipElem.textContent = starship.name;
        starshipsElem.appendChild(starshipElem);
      });
    });

    // Set the character data in the container
    characterContainer.innerHTML = `
      <h1 class="name">${character.name}</h1>
      <p>Height: ${character.height} cm. Mass: ${character.mass} kg</p>
      <p>Hair color: ${character.hair_color}.
      <p>Skin color: ${character.skin_color}</p>
      <p>Eye color: ${character.eye_color}</p>
      <p>Birth year: ${character.birth_year}. Gender: ${character.gender}</p>
      <p class="homeworld"></p>
      <p>Films:</p>
      <ul class="films"></ul>
      <p class="species"></p>
      <p>${character.starships[0] ? "Starships:" : ' '}</p>
      <ul class="starships"></ul>
      <p>${character.vehicles[0] ? "Vehicles:" : ' '}</p>
      <ul class="vehicles"></ul>
    `;
    
    const app = document.getElementById('app');
    app.appendChild(characterContainer);
  });
}
