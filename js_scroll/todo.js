console.log('1st problem')
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd')
console.log('###########################################');
console.log('3rd')
console.log('...........................................');
console.log('4th')
console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

var colorcount= 0;
var words = ["about not giving up", "exciting", "fun", "being helpful", "being open", "what I learned at CodingDojo!"],
	el = document.getElementById('magic'),
	body = document.getElementById('body'),
	word_counter = 0,
	character_counter = 0;
	color_counter= 1;
	
function updateText()
{
	
	if (words[word_counter][character_counter] == ' '){
	el.innerHTML=el.innerHTML + '&nbsp';
	character_counter++;
	}

	el.innerHTML = el.innerHTML+words[word_counter][character_counter++];


	if(character_counter == words[word_counter].length+1)
	{
		word_counter++; 	//choose a different word
		character_counter = 0;	//start over with the first character of the word
		el.innerHTML = '';  //set the html to be blank

		//Change background colors after each word.
		if (color_counter %2 == 0){
			body.style.backgroundColor = '#ff8080';
			color_counter++;
		}
		else
		{
			body.style.backgroundColor = '#668cff';
			color_counter++;
		}

		//if we're displaying the last word, go back to the first word
		if(word_counter == words.length){
			word_counter = 0;

		}
	}
}

setInterval(updateText,900);