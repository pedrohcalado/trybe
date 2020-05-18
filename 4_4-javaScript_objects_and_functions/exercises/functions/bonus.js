//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romans(romanNumber) {
  //criando objeto com numeros romanos para consulta
  let romanToNumber = {
    I: 1,   
    V: 5,   
    X: 10, 
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  //verifica se romanNumber está no romanToNumber
  if (romanToNumber[romanNumber] !== undefined) {
    return romanToNumber[romanNumber];
  } 
  //faz a contagem para os outros casos
  else {
    let soma = 0;
    for (let i = romanNumber.length-1; i >= 0; i-=1) {
      if (romanToNumber[romanNumber[i]] <= romanToNumber[romanNumber[i-1]] || romanToNumber[romanNumber[i-1]] == undefined) {
        soma += romanToNumber[romanNumber[i]];
      }
      else if (romanToNumber[romanNumber[i]] > romanToNumber[romanNumber[i-1]]) {
        soma += romanToNumber[romanNumber[i]] - romanToNumber[romanNumber[i-1]];
        i -= 1;
      }
    }
    return soma;  
  }
}

console.log(romans("CXXXVII"));
