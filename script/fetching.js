async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/ClassicSours/TheInterstellarAsteroidRush/main/Asteroids/Asteroid%201.csv';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  
  }