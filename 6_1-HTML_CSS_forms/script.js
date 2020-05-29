// add states to combobox
const states = document.getElementById('states');

const statesArray = ['<Nenhum>','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

for (let i = 0; i < statesArray.length; i += 1) {
  const eachState = document.createElement('option');
  eachState.classList.add('state');
  eachState.innerHTML = statesArray[i];
  states.appendChild(eachState);
}

// listen to the submit button
const sendButton = document.getElementById('submit');
const date = document.getElementById('start-date');
sendButton.addEventListener('click', function (event) {
  if (!testDate(date.value)) {
    event.preventDefault();
    alert('Erro na data');
  }
})

// test the date format
function testDate (date) {
  let date_regex = /^(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return (date_regex.test(date));
}
