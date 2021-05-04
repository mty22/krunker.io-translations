#!/bin/bash
# Quick and easy links to languages based on release tag provided.
# by github.com/mty22

release_ver="$1"

if [ -z "$release_ver" ]; then
	echo "Script usage: $0 <version>."
	echo "Example: $0 3.8.5-live"
	exit 1
fi


echo -e "Changes in this release:

https://github.com/mty22/krunker.io-translations/tree/${release_ver}\n"

# Assuming you are working from the github root directory..
for y in $(grep '\:' languages.js | sed -e 's/ //g'|egrep -vi 'LANG|en.js' ); do 
	lang_short=$(echo $y | cut -d\" -f2) 
	lang_long=$(echo $y | cut -d\" -f4)
	echo "${lang_long}: https://raw.githubusercontent.com/mty22/krunker.io-translations/${release_ver}/${lang_short}.js"
done

echo -e "\nIn-game language selector: https://raw.githubusercontent.com/mty22/krunker.io-translations/${release_ver}/languages.js"

echo -e "\nZip archive of all files in this release (**note**: this includes \`en.js\`, you can ignore this): https://github.com/mty22/krunker.io-translations/archive/refs/tags/${release_ver}.zip"

echo -e "\nNotes:\n"
