#!/bin/bash

for i in {01..15}
do
	filename="file$i.txt"
	touch "$filename"
	gitac "Touched $filename on $(date)"
done
