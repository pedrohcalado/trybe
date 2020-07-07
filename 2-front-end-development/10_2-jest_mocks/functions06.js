function dogFunction() {
  return (
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => json)
    .catch('error trying to get the dog')
    )
}

module.exports = {
  dogFunction,
}