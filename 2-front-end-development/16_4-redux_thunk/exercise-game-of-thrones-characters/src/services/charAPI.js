const fetch = require('node-fetch')

const APIURL = 'https://anapioficeandfire.com/api/characters?name='

const charAPI = (char) => (
  fetch(`${APIURL}${char.split().join('+')}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

// console.log(charAPI('').then(json => console.log(json)))

export default charAPI;
