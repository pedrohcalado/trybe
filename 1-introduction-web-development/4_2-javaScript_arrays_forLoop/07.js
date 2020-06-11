let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0;i < numbers.length;i += 1) {
    let count = 0;
        for (n = 0;n < numbers.length;n += 1) {
            if (numbers[i] <= numbers[n]) {
                count += 1;
            }
        }
    if (count == numbers.length) {
        console.log("O menor número é: " + numbers[i])
    }
}