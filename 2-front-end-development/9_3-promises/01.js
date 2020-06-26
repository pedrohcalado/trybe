const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => fetchJoke(data))

const fetchJoke = (data) => {
  const h2 = document.querySelector('h2');
  h2.innerHTML = data.joke;
};

window.onload = () => fetchJoke();
        



        
