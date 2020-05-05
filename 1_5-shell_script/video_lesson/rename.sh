#!/bin/bash

DIR=$1
EXT=$2

for i in `ls *$(EXT) $DIR`
do
    echo `date +%F`-$i 
    mv $i `date +%F`-$i
done

