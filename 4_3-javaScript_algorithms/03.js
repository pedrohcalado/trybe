function invertedTriangle(n) {
    if (n >1 && Number.isInteger(n)) {
        let espace = "";
        let asterisk = "";
        for (let i = 1;i <= n;i+=1) {
            espace = "";
            for (var j = i;j <= n-1;j+=1) {
                espace += " ";
            }
            asterisk += "*";
            console.log(espace + asterisk);
        }
    } else {
        console.log("O número precisa ser inteiro e maior que 1")
    }
}

invertedTriangle(5);