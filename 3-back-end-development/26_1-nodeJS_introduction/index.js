/* eslint-disable no-console */
const readlineSync = require('readline-sync');

const userHeight = readlineSync.questionInt("What's your height in cm? ");

const userWeight = readlineSync.questionFloat("What's your weight in kg? ");

// eslint-disable-next-line no-restricted-properties
const imc = (userWeight / Math.pow(userHeight * 0.01, 2)).toFixed(2);

console.log(`This is your IMC: ${imc}`);
