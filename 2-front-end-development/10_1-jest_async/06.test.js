// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

// 1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

// ------------------------------------------------------

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.name === name);
      if (arrayAnimals.length !== 0) return resolve(arrayAnimals[0]);
      return reject('Nenhum animal com esse nome!')
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list);
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 2. Adicione uma nova funcional idade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const arrayAnimals = Animals.filter(animal => animal.age === age);
    if (arrayAnimals.length !== 0) return resolve(arrayAnimals);
    return reject('Nenhum animal com essa idade');
  })
)

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(list => list);
}

describe('Quando existe animal com a idade', () => {
  test('Existe animal com idade 2', async () => {
    expect.assertions(1);
    await expect(getAnimalByAge(2)).resolves.toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
  })
})

describe('Quando não existe animal com a idade', () => {
  test('Não existe animal com idade 10', async () => {
    expect.assertions(1);
    await expect(getAnimalByAge(10)).rejects.toEqual('Nenhum animal com essa idade');
  })
})