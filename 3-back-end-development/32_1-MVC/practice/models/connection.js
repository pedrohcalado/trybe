const mysql = require('mysql2/promise');
require('dotenv/config');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'mvc_example'});

module.exports = connection;
