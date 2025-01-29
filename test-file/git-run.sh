#!/bin/bash

for i in {01..15}
do
	filename="file$i.txt"
	touch "$filename"
	git add "$filename"
	git commit -m "Touched $filename on $(date)"
done
