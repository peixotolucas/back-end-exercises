const readline = require('readline-sync');
const imc = require('./imc');


const weight = readline.questionFloat('What is your weight?')
const height = readline.questionFloat('How tall are you?');

console.log(`Your BMI is: ${imc(weight, height)}, ${judgement}`);

function judgement (imc) {
if (imc < 18.5) {
  console.log('You are very thin, go eat a lasagna!(underweight)')
  return;
}

if (imc >= 18.5 && imc < 25) {
  console.log('Allright! Keep it up, whatever you are doing. (normal weight)')
  return;
}

if (imc >= 25 && imc < 30) {
  console.log('Not much to worry about, just hit a gym once in a while. (overweight)')
  return;
}

if (imc >= 30 && imc < 35) {
  console.log('You got that Homer Simpson charm, but be careful! (obesity lvl 1')
  return;
}

if (imc >= 35 && imc < 40) {
  console.log('Ok chubby, we need to talk. (obesity lvl 2')
  return;
}

if (imc >= 40) {
  console.log('Please, this aint funny anymore, your body wont take it! (obesity lvl 3-4')
  return;
}}

