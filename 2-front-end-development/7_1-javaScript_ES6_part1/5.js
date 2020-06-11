let str = 'Tryber x aqui';

const changeX = word => {
  let arr = str.split(' ');
  for (let i =0; i < arr.length; i += 1) {
    if (arr[i] === 'x') {
      arr[i] = word;
    }
  }
  return arr.join(' ');
}
const name = changeX('Pedro');
const skills = ['A', 'B', 'C', 'D', 'E'];

const presentation = (name) => {
  console.log(`${name}, 
  Minhas 5 habilidades são: 
  1. ${skills[0]}
  2. ${skills[1]}
  3. ${skills[2]}
  4. ${skills[3]}
  5. ${skills[4]}
  #goTrybe!
  `);
}

presentation(name);