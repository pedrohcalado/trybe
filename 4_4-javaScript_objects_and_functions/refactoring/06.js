//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chess(peca) {
  switch (peca.toLowerCase()){
    case "bishop":
        console.log("diagonals");
        break;
    case "knight":
        console.log("L movements");
        break;
    case "pawn":
        console.log("to the sides os front");
        break; 
  }  
}

chess("bishop");
