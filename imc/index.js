const readline = require('readline-sync');
const imc = require('./imc');


const weight = readline.questionFloat('What is your weight?')
const height = readline.questionFloat('How tall are you?');

console.log(`Your BMI is: ${imc(weight, height)}`);