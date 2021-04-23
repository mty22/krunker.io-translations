// ==UserScript==
// @name         Krunker translation preview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       chonker1337
// @match        *://krunker.io/*
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

module = {}

// This userscript can help you translate krunker by showing how your translations look in game, making it easier to spot errors 
// or to see in what context some of the translations are used, it does so by replacing the english translation in game with your own.
//
// To install this userscript, download tampermonkey: http://tampermonkey.net/ , in the tampermonkey menu add new script, paste this script and hit Ctrl+S.
// Another way to install this is to just press the "Raw" button at the top right above this script after installing tampermonkey.

// Paste the WHOLE translation file below this line (whole as in Ctrl+A, Ctrl+C, Ctrl+V)




let translation = Object.fromEntries(module.exports.trim().split("\n").map(v => [v.split(" ", 1), v.split(" ").slice(1).join(" ")]));
Object.defineProperty(Object.prototype, "translations", {
	get() {
		return this._translations
	},
	set(v) {
		this._translations = Object.defineProperty(v, "en", {
			get() { return translation },
			set(v) {},
		})
	}
})
