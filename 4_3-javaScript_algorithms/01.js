//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

/*
Algoritmo
1-Condicao para que n seja maior que 1
2-Um for pra imprimir em uma linha, sendo que o i fica multiplicado pelo n 
*/

function printSquare(n) {
	if (n > 1 && Number.isInteger(n)) {
		let asterisk = "";
		for (let i = 1;i <= n;i+=1) {
			asterisk += "*";
		} 
		for (let j = 1;j <= n;j+=1) {
			console.log(asterisk);
		}
	} else {
		console.log("O numero de lados precisa ser um inteiro maior que 1");
	}
}

printSquare(3);
