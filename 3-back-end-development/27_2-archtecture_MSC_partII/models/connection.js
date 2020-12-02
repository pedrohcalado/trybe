const { MongoClient } = require('mongodb');

const URI = 'mongodb://localhost:27017/cep-lookup';
const DB_NAME = 'cep-lookup';

let connection = null;

module.exports = async function (collectionName) {
  connection =
    connection ||
    (await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));

  return connection.db(DB_NAME).collection(collectionName);
};