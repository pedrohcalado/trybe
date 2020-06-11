let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1;i < numbers.length;i += 1) {
    for (let n = 0;n < i;n += 1) {
        if (numbers[i] < numbers[n]) {
            let aux = numbers[n];

            numbers[n] = numbers[i];
            numbers[i] = aux;
        }
    }
}
console.log(numbers);