function invertedTriangle(n) {
    if (n >1 && Number.isInteger(n) && n%2 != 0) {
        let espace = "";
        let asterisk = "*";
        for (let i = 1;i <= n;i+=2) {
            espace = "";
            for (let j = i;j < n;j+=2) {
                espace += " ";
            }
            console.log(espace + asterisk + espace);
            asterisk += "**";
        }
    } else {
        console.log("O número precisa ser inteiro, ímpar e maior que 1");
    }
}

invertedTriangle(6);
