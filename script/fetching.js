async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/crispynoodlesoup/pb_drilling_solutions/main/data/ast1.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  
  }

function populateHeader(obj) {
    alert(obj[0]["BIT_DEPTH"]);
}