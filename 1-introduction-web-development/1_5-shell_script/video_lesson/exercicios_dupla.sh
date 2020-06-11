#!/bin/bash

LOCATION=$1

FILECOUNT=$(find $LOCATION -type f | wc -l)
DIRCOUNT=$(find $LOCATION -type d | wc -l | cat >> a.txt | expr -1)

echo $FILECOUNT
echo $DIRCOUNT
