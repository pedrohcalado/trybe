//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romans(romanNumber) {
  //criando objeto com numeros romanos para consulta e colocando romanNumbers em uppercase
  romanNumber = romanNumber.toUpperCase();
  let romanToNumber = {
    I: 1,   
    V: 5,   
    X: 10, 
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  //criando variavel soma que guarda a soma dos algarismos do numero romano, comecando do fim do número
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

//testando
vetorRomano=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX','LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI','XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C']

for (j in vetorRomano) {
  console.log(romans(vetorRomano[j]));
}

