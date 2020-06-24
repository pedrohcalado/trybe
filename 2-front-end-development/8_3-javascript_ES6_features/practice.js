// spread and rest
const arr1 = [1, 2, 3, 4];

const func = (...arr) => {
  return arr.reduce((acc, num) => acc + num);
}

console.log(func('1', '2', '3', '4', '5', '6'));

// array destructuring
const fornecedor = {
  razaosocial : "Alura - Cursos Online", 
  cnpj : "00.000.000/0000-00", 
  email : "suporte@alura.com.br"
};

const {razaosocial, cnpj, email} = fornecedor;

const imprime = ({razaosocial, cnpj, email}) => {
  console.log(email)
};

imprime(fornecedor)

// array destructuring
const arr = [1, 2, 3, 4, 5, 6]

const [v1, v2,...v] = arr;
console.log(v1, v2, v)

// 
const person = {
  name: "João",
  lastName: "Jr",
  age: 34,
  nationality: 'Persa'
}

const { nationality = "Brazilian" } = person
console.log(nationality) // Brazilian

//
const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))

