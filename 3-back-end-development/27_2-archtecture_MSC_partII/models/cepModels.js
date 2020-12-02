const connection = require('./connection');
const fetch = require('node-fetch');

const insertCEPonMongo = async ({cep, uf, cidade, bairro, logradouro}) => {
  connection('CEP').then((result) =>
    result.insertOne({ CEP: cep, UF: uf, cidade, bairro, logradouro }),
  );
};

const getCEPFromMongo = async (CEP) => {
  return connection('CEP').then((result) =>
    result.findOne({ CEP }),
  );
}

const fetchCEP = async (cep) => {
  return fetch(`http://cep.la/${cep}`, {
      method: 'GET',
      headers: {'Accept': 'application/json'},
    })
      .then((result) => result.json())
      .then(data => data);
}

module.exports = {
  insertCEPonMongo,
  getCEPFromMongo,
  fetchCEP,
};
