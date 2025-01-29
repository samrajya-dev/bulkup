#!/bin/bash

for i in {01..15}
do
	filename="file$i.txt"
	touch "$filename"
	git add "$filename"
	git commit -m "Added $filename on $(date)"
	rm "$filename"
	git commit -am "Removed $filename"
done
