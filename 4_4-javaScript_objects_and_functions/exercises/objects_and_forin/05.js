//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

//criando array de objetos
let infos = [{
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
},
{
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}
]
//criando array de keys
let keys = [];
for (let i in infos[0]) {
  keys.push(i);
}

//imprimindo valores
for (let k in keys) {
  console.log(`${infos[0][keys[k]]} e ${infos[1][keys[k]]}`);
}