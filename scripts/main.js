$(document).ready(function() {
	var wordList = ['budget', 'gift', 'password', 'familiar', 'coach', 'constituency', 'twist', 'agenda', 'read', 'tax', 'hunter', 'speculate', 'access', 'pain', 'hospital', 'late', 'radiation', 'sign', 'pay', 'introduce', 'pursuit', 'biscuit', 'belly', 'cabin', 'Europe', 'uncle', 'shoot', 'infect', 'wound', 'essay'];
	var validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var word = wordList[Math.floor(Math.random()*wordList.length)]; 
	var guessLetters = [];
	var letters = [];
	createBlanks();
	function createBlanks() {
		$('.wordBlanks').empty();
		for (i = 0; i < word.length; i++) {
			$('.wordBlanks').append(`<h1 id="${word[i]}">_</h1>`);
			letters.push(word[i]);	
		}
	}
			
	document.onkeyup = function(event) {
		var guess = event.key;
		
		if (word.includes(guess)){	
			$(`h1[id=${guess}]`).text(guess);	
		}
		else if (!guessLetters.includes(guess) && validLetters.includes(guess)){
			$(".guessedLetters").append(`<p>${guess}</p>`)
			guessLetters.push(guess);
		}
		
	}
	
	$('#reset').on('click', function() {
		word = wordList[Math.floor(Math.random()*wordList.length)]; 
		word = wordList[Math.floor(Math.random()*wordList.length)]; 
		guessLetters = [];
		letters = [];
		$('.guessedLetters').empty();
		createBlanks();	
	});	
});
