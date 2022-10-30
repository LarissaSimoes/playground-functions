// Desafio 1
function compareTrue(nome, sobrenome) {
  const Larissa = true;
  const Simões = true;
   if (nome == Larissa && sobrenome == Simões) {
    return true;
   } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(frutas) {
      return frutas[0], frutas[frutas.length - 1];
    }

// Desafio 5
function footballPoints(wins, ties) {
  let resultado;
  resultado = (wins*3) + ties;
  return resultado;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayStrings = [];
  for (let i = 0; i < array.length; i += 1){
  if (array[i] % 3 === 0 && array[i] % 5 === 0){
  arrayStrings[i] = 'fizzBuzz';
  }else if (array[i] % 3 === 0){
  arrayStrings[i] = 'fizz';
  }else if (array[i] % 5 === 0){
  arrayStrings[i] = 'buzz';
  } else {
  arrayStrings[i] = 'bug!';
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
