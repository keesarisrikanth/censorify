 var censoredWords = ['sad','mad','bad'],
 	 customCensoredWords=[],
 	 censoredTextReplacement='****';

 /*
 *	Method that censors the text for the words set.
 */
 function censorText(txtMain){

 	for(var i=0;i< censoredWords.length; i++){
 		txtMain=txtMain.replace(censoredWords[i],censoredTextReplacement);
 	}

 	for(var i=0;i< customCensoredWords.length; i++){
 		txtMain=txtMain.replace(customCensoredWords[i],censoredTextReplacement);
 	}
 	return txtMain;
 }


/*
 *	Add words to the censor words list.
 */
 function addCensorWord(censorWord){

 	customCensoredWords.push(censorWord);
 }

/*
 *	Get the list of censored words.
 */
 function getCensorWords(){
 	return censoredWords.concat(customCensoredWords);
 }

 exports.addCensorWord=addCensorWord;
 exports.getCensorWords=getCensorWords;
 exports.censorText=censorText;
