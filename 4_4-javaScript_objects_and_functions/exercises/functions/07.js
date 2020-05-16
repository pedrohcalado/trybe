//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verifyEndOfWord(word, ending) {
  
  //verificando se ending é menor que word
  if (ending.length < word.length) {
    
    //cria final da string word baseado na diferença de comprimento das strings
    let startingPoint = (word.length - ending.length);
    let wordEnding = "";
    for (let i = startingPoint; i <= word.length-1; i+=1) {
      wordEnding += word[i];
    }

    //compara se wordEnding e ending são iguais e retorna true se forem e false se não
    return (wordEnding === ending);

  } else {
    console.log ("A string ending deve ser menor do que a string word!");
  }
}

console.log(verifyEndOfWord("trybe", "be"));
console.log(verifyEndOfWord("joaofernando", "fernan"));

