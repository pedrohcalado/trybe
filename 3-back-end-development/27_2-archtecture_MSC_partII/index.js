const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const cepModels = require('./models/cepModels');

const app = express();

app.use(bodyParser.json());

app.get('/lookup', rescue(async (req, res) => {
  const { cep } = req.query;
  const mongoCEP = await cepModels.getCEPFromMongo(cep);
  if (mongoCEP) {
    res.status(200).json(mongoCEP);
  } else {
    const cepData = await cepModels.fetchCEP(cep);
    await cepModels.insertCEPonMongo(cepData);
  }
}));

// validar cep

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
});
