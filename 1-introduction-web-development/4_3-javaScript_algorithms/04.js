function triangle(n) {
    if (n >1 && Number.isInteger(n)) {
        let espace = "";
        let asterisk = "";
        if (n%2 == 0) {
            espace = "";
            asterisk = "**";
            for (let i = 1;i <= n;i+=2) {
                espace = "";
                for (let j = i;j < n - 1;j+=2) {
                    espace += " ";
                }
                console.log(espace + asterisk + espace);
                asterisk += "**";
            }
        } else {
            espace = "";
            asterisk = "*";
            for (let i = 1;i <= n;i+=2) {
                espace = "";
                for (let j = i;j < n;j+=2) {
                    espace += " ";
                }
                console.log(espace + asterisk + espace);
                asterisk += "**";
            }
        }   
    } else {
        console.log("O número precisa ser inteiro, ímpar e maior que 1");
    }
}

triangle(5);
triangle(6);
