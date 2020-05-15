//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

function triangle(n) {
    if (n > 1 && Number.isInteger(n)) {
        let asterisk = "";
        for (let i = 1;i <=n ;i+=1) {
            asterisk += "*";
            console.log(asterisk);
        }
    } else {
        console.log("O número precisa ser um inteiro e maior que 1")
    }
}

triangle(5);
