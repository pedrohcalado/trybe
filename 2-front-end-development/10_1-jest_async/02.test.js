const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

describe('test for existing results', () => {
  test('test if Mark exists', () => {
    expect.assertions(1);
    return getUserName(4).then(users => {
      expect(users).toEqual('Mark');
    });
  })
  
  test('test if Paul exists', () => {
    expect.assertions(1);
    return getUserName(5).then(users => {
      expect(users).toEqual('Paul')
    })
  })
})

describe('test for non existing results', () => {
  it('test error', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    })
  })
})
