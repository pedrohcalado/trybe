#!/bin/bash

dir=$1

if [ -d "$dir" ]
then
    arquivos=`ls -l $dir| wc -l`
    um=1
    count=$(( arquivos - 1 ))
    echo "O $dir tem $count arquivos"
else
    echo "O argumento $dir não é um diretório"
fi