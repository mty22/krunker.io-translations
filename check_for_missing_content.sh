#!/bin/bash
# The purpose of this script is to take the default English language file (en.js), and check all other files for missing translations or content.
# Missing content will be omitted to MISSING_<lang>.js

# Variables
default_file="en.js"
missing_content="false"

# Clean up old files
rm -fv *_MISSING_KEYS.txt

# Loop through all keys in $default_file
for key in $(awk '{print$1}' $default_file | egrep -v '(module.exports|`;)' | sort | uniq); do

	# Loop through all *.js files (excluding $default_file), grep specifically for the key and check the result of grep.
	for js_file in $(find . -type f -name '*.js' -not -name $default_file); do
		base_file=$(basename -- "$js_file")
		echo -ne "==> Checking $base_file for key ----->  $key  <-----\r"
		if [ "$(grep -w -c $key $js_file)" == "0" ]; then
			out_file=$(echo $base_file | sed -e 's/.js/_MISSING_KEYS.txt/g')
			echo "$(grep $key $default_file)" >> $out_file
			missing_content="true"
		fi
	done
done

# Post checks.
if [ "$missing_content" == "true" ]; then
	echo -e "\n==> Missing content was found, please see the following files:\n"
	wc -l *_MISSING_KEYS.txt | sort -nk1 | grep -v total
else
	echo -e "==> Looks like we're up to date!"
fi
