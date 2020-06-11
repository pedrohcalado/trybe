// Part II
const addProp = (obj, k, v) => {
  obj[k] = v;
  return obj;
}

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

console.log(addProp(customer, newKey, lastName));

// Part I

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
const printSkills = (student) => {
  const keys = Object.keys(student);
  for (i in keys) {
    console.log (`${keys[i]}, Nivel: ${student[keys[i]]}`);
  }
}

printSkills(student1);