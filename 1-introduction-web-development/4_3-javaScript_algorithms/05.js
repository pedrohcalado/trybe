//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

function emptyTriangle(n) {
    if (n > 1 && Number.isInteger(n) && n%2 != 0) {
        let asterisk = "*";
        let externalSpace = "";
        let internalSpace = "";
        for (let i = 1;i <= n - 2;i += 2) {   
            externalSpace = "";
            internalSpace = ""; 
            for (let j = i;j < n - 1;j += 2) {
                externalSpace += " ";
            }
            for (let k = 1;k <= i - 2;k += 1) {
                internalSpace += " ";
            }
            if (i == 1) {
                console.log(externalSpace + asterisk + externalSpace);
            } else {
                console.log(externalSpace + asterisk + internalSpace + asterisk + externalSpace);
            } 

        }
        for (let l = 1;l < n;l += 1) {
                asterisk += "*";
            }
            console.log(asterisk);    
    } else {
        console.log("O número precisa ser maior que um, inteiro e ímpar");
    }
}

emptyTriangle(7);
