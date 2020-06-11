// Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string
let str = 'oi x apensas estou testando isso aqui x com x'

const changeX = word => {
  let arr = str.split(' ');
  for (let i =0; i < arr.length; i += 1) {
    if (arr[i] === 'x') {
      arr[i] = word;
    }
  }
  return arr.join(' ');
}
