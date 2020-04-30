#!/bin/bash

#read -p "Digite o nome de uma pessoa: " nome1
#read -p "Digite o nome de outra pessoa: " nome2

nome1="Luana"
nome2="Pedro"

if [ $nome1 > $nome2 ]
then
	echo "$nome1 eh maior que $nome2"
elif [ $nome1 = $nome2 ]
then
	echo "$nome1 eh igual ao $nome2"
else
	echo "$nome1 eh menor que $nome2"
fi
