#!/bin/bash

read -p "Digite um numero: " var1
read -p "Digite outro numero: " var2

if [ $var1 -gt $var2 ]
then
	echo "$var1 eh maior que $var2"
elif [ $var1 -eq $var2 ]
then
	echo "$var1 eh igual a $var2"
else
	echo "$var1 eh menor que $var2"
fi
