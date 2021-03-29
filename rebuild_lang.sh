#!/bin/bash
# Rebuild language file, line by line to ensure they're in the correct order.

basefile='en.js'
langfile="$1"
newlangfile="new_${langfile}"

if [ -z "$langfile" ]; then
	echo "Error. File usage: $0 langfile.js"
	exit 1
fi

cat /dev/null > $newlangfile

# Loop through the base file line by line.
while read -r line; do
	if [ -z "$line" ]; then
		echo "" >> $newlangfile
	else
		# If the line exists in both files, copy it across to the new file.
		key=$(echo $line | awk '{print$1}')
		if [ "$(grep -Ec "(^|\s)$key($|\s)" $langfile)" == "1" ]; then
			grep -ER "(^|\s)$key($|\s)" $langfile >> $newlangfile
		else
			# Add in missing key:value
			echo "New: -"
			grep -w "$key" $basefile
			echo "-"
			grep -ER "(^|\s)$key($|\s)" $basefile >> $newlangfile
		fi
	fi
done < $basefile
