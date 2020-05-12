//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "PAWN";

switch (peca.toLowerCase()){
    case "bishop":
        console.log("diagonals");
    case "knight":
        console.log("L movements");
    case "pawn":
        console.log("to the sides os front");
}