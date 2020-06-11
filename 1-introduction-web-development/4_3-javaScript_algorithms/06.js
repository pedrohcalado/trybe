// Dado um número, mostre a quantidade de números primos existentes no intervalo e quais são estes números

function primeNumbers(n) {
    let count = 0;
    for (let i = 1;i <= n;i += 1) {
        if (n % i === 0) {
            count += 1;
        }
    }
    if (count === 2) {
        console.log ("O número " + n + " é primo!");
    } else {
        console.log("O número " + n + " não é primo!");
    }
}

primeNumbers(15);
primeNumbers(2);
primeNumbers(0);
primeNumbers(17)
