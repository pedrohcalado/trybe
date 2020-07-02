// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');


const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

it('testing todo list', async () => {
  expect.assertions(2);
  const projects = await getRepos('https://api.github.com/users/tryber/repos?per_page=100');
  expect(projects.some(project => project === 'sd-01-week4-5-project-todo-list')).toBeTruthy();
  expect(projects.some(project => project === 'sd-01-week4-5-project-meme-generator')).toBeTruthy();
})
