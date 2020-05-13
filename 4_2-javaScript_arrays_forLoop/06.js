let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let count = 0;

for (let i = 0;i < numbers.length; i += 1) {
    if (numbers[i] %2 != 0) {
        count += 1;
    } 
}

if (count != 0) {
    console.log(count);
} else {
    console.log("nenhum valor ímpar encontrado");
}