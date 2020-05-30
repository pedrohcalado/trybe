// add states to combobox
const states = document.getElementById('states');
const statesArray = ['<Nenhum>','AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

for (let i = 0; i < statesArray.length; i += 1) {
  const eachState = document.createElement('option');
  eachState.innerHTML = statesArray[i];
  eachState.value = statesArray[i];
  states.appendChild(eachState);
}

// listen to the submit button
const sendButton = document.getElementById('submit');
const date = document.getElementById('start-date');
const email = document.getElementById('email');
const inputs = document.querySelectorAll('input');
const options = document.querySelectorAll('options');
const textareas = document.querySelectorAll('textarea');

sendButton.addEventListener('click', function (event) {
  if (!validateDate(date.value)) {
    event.preventDefault();
    alert('Erro na data');
  }
  if (!validateEmail(email.value)) {
    event.preventDefault();
    alert('Erro no email');
  }


  // create an object with the data
  const dataConsolidated = {};
  for (let i = 0; i < inputs.length; i += 1) {
    dataConsolidated[inputs[i].name] = inputs[i].value;
  }
  for (let i = 0; i < options.length; i += 1) {
    dataConsolidated[options[i].name] = options[i].value;
  }
  for (let i = 0; i < textareas.length; i += 1) {
    dataConsolidated[textareas[i].name] = textareas[i].value;
  }
  sessionStorage.setItem('data', JSON.stringify(dataConsolidated));
})

// create div with consolidated information
window.onload = function () {
  console.log(JSON.parse(sessionStorage.getItem('data')));
}

// validate date format
function validateDate (date) {
  const date_regex = /^(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return (date_regex.test(date));
}

// validate email format
function validateEmail(email) {
  const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(String(email).toLowerCase());
}


