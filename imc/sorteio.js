const readline = require("readline-sync");

function logResultado (numero, resposta) {
  if (numero !== resposta) {
    return console.log(`Que pena, errou! O numero era ${numero}`);
  }
  return console.log('Boa, numero correto!');
}

function runGame () {
  const numero = parseInt(Math.random() * 10);
  const resposta = readline.questionInt('Digite um numero entre 0 e 10 para saber se e o numero que estou pensando: ');
  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim)'
  );
  if (novamente !== 's') return console.log('OK, ate a proxima!');

  runGame(); //função que chama a si mesma ou função recursiva
}

runGame();