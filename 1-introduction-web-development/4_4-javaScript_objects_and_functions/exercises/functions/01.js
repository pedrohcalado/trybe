//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

function verifyPalindrome(word) {
  let wordBackwords = "";
  word = word.toLowerCase()
  for (let i = word.length - 1; i >= 0; i-=1) {
    wordBackwords += word[i];
  }
  return (word === wordBackwords);
};

console.log(verifyPalindrome("arara"));
console.log(verifyPalindrome("pedro"));
