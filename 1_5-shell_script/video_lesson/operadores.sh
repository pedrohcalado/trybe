#!/bin/sh

read -p 'Digite um numero: ' num1
read -p 'Digite o segundo numero: ' num2



soma=$[$num1+$num2]
sub=$[$num1-$num2]
div=$[$num1/$num2]
mult=$[$num1*$num2]

echo 'A soma eh: ' $soma
echo 'A subtracao eh: ' $sub
printf 'A divisao eh: ' 
echo "scale=2; $num1 / $num2" | bc 
echo 'A multiplicacao eh: '  $mult 



