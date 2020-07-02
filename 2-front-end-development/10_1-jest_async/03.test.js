const { TestScheduler } = require("jest");

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

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

// Dica: Utilize o try/catch para o caso de erro.

describe('testing for existing values', () => {
  test('test if Mark exists', async () => {
    const returnedUser = await getUserName(4);
    expect(returnedUser).toEqual('Mark');
  })
  test('test if Paul exists', async () => {
    const returnedUser = await getUserName(5);
    expect(returnedUser).toEqual('Paul');
  })
})
