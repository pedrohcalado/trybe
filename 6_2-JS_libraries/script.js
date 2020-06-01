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
const date = document.getElementById('datepicker');
const email = document.getElementById('email');
const inputs = document.querySelectorAll('input');
const options = document.querySelectorAll('options');
const textareas = document.querySelectorAll('textarea');
const labels = document.querySelectorAll('labels');

// date
date.addEventListener('change', function () {
  date.innerHTML = picker._o.field.value;
  console.log(picker._o.field.value);
})

// clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = '';
  }
  for (let i = 0; i < options.length; i += 1) {
    options[i].value = '';
  }
  for (let i = 0; i < textareas.length; i += 1) {
    textareas[i].value = '';
  }
});

// just-validate
new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 30
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 50
    },
    tipo: {
      required: true
    },
    resume: {
      required: true
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    'cargo-description': {
      required: true,
      maxLength: 500
    },
    'start-date': {
      required: true
    }
  },
  messages: {
    name: {
      minLength: 'Este campo deve conter no mínimo 3 caracteres',
      maxLength: 'Este campo deve conter no máximo 30 caracteres',
      required: 'Campo obrigatório'
    },
    email: {
      required: 'Campo obrigatório',
      email: 'Por favor, digite um e-mail válido'
    },
    cpf: {
      required: 'Campo obrigatório',
      maxLength: 'Nº máximo de caracteres: 11'
    },
    address: {
      required: 'Campo obrigatório',
      maxLength: 'Nº máximo de caracteres: 50'
    },
    tipo: {
      required: 'Campo obrigatório'
    },
    resume: {
      required: 'Campo obrigatório'
    },
    cargo: {
      required: 'Campo obrigatório',
      maxLength: 'Nº máximo de caracteres: 40'
    },
    'cargo-description': {
      required: 'Campo obrigatório',
      maxLength: 'Nº máximo de caracteres: 500'
    },
    'start-date': {
      required: 'Campo obrigatório'
    }
  }
});
