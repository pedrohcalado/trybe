//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

function greaterName(names) {
  let greater = names[0];
  let counter = 0;
  for (i in names) {
    for (j in names[i]) {
      counter += 1;
    }
    (counter > greater.length) ? greater = names[i] : greater;
    counter = 0;
  }
  return greater;
}

console.log(greaterName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
