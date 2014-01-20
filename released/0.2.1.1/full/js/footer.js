/* Functions who handle Mado's footer. */

/*
* Variables (in alphabetical order).
*/

var charsDiv; // The div who contains the document's chars number.
var nameDiv; // The div who contains the name of the opened document.
var wordsDiv; // The div who contains the document's words number.

/*
* Functions (in alphabetical order).
*
* Resume:
	* counterSelection (): what counter to display.
	* displayCounter (): change charsDiv and wordsDiv.
	* resetCounter (): what to display if there is nothing in the contenteditable.
*/


function counterSelection () {
	if (charsDiv.style.display == "none") {
		charsDiv.style.display = "inline";
		wordsDiv.style.display = "none";
	}
	else {
		charsDiv.style.display = "none";
		wordsDiv.style.display = "inline";
	}
}

function displayCounter (counter) {
	charsDiv.innerHTML = "&nbsp;" + counter.characters + " characters&nbsp;";
  	wordsDiv.innerHTML = "&nbsp;" + counter.words + " words&nbsp;";
  	if (counter.characters == 1)
  		charsDiv.innerHTML = "&nbsp;" + counter.characters + " character&nbsp;";
  	if (counter.words == 1)
		wordsDiv.innerHTML = "&nbsp;" + counter.words + " word&nbsp;";
}

function resetCounter () {
	charsDiv.innerHTML = "&nbsp;0 characters&nbsp;";
  	wordsDiv.innerHTML = "&nbsp;0 words&nbsp;";
}