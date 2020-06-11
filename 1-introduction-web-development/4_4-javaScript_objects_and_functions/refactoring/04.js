//Faça um programa que, dado um valor definido numa variável, retorne “positive” se esse valor for positivo, “negative” se for negativo e “zero” caso contrário.


function positiveOrNegative(a){
  if (a>0){
    return "positive";
} else if(a<0){
    return "negative";
}else {
    return "zero";
}
}

let signal = positiveOrNegative(-3);
console.log(signal)
