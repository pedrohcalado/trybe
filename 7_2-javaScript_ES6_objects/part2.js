const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addShift = (lesson, k, v) => lesson[k] = v;

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = object => Object.keys(object);

// 3. Crie uma função para mostrar o tamanho de um objeto.
const objectSize = object => Object.keys(object).length;

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = object => Object.values(object);

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3
const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const students = () => {
  let count = 0;
  for (i in allLessons) {
    count += allLessons[i].numeroEstudantes;
  }
  return count;
}

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const keyNumber = (object, k) => Object.values(object)[k];

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave
const existsKVPair = (object, k, v) => {return (object[k] == v)};
