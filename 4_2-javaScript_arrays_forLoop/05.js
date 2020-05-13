let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//i = numero a ser verificado
//n = numero a ser comparado
//se count para um determinado i for igual a numbers.length, entao ele é o maior

for (let i=0;i < numbers.length;i++) {
    let count = 0;
    for (let n=0;n < numbers.length;n++) {
        if (numbers[i] >= numbers[n]) {
            count++;
        }
    }
    if (count == numbers.length && count != 0) {
        console.log("O maior número do array é: " + numbers[i])
    }
}