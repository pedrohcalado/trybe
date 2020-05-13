let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
let aux;
for (let i = 0;i < numbers.length;i += 1) {
    if (i != numbers.length-1) {
        aux = numbers[i]*numbers[i+1];
        array.push(aux);
    } else {
        aux = numbers[i]*2;
        array.push(aux);
    }
}

console.log(array);