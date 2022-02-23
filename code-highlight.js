/* The snippet is taken from the main.js file of this repo, which houses a gif-based, charades-style trivia game in which the user guesses movie, book, or song titles. 

Each word of the title generates a single gif and the user guesses the title based on the series of gif's (powered by the Giphy API). 

Though I might approach it differently now, the code snippet below was written with less than a month of Javascript experience and features creative solutions to some of the challenges I encountered in effectively translating a randomly selected title into individual words for an API call. 
*/


//Generates random index, translates/tests title from master array
const getTitle = () => {
    clearAll();
    randomIndex = Math.floor(Math.random() * masterArray.length);

    //Parse through each word of title for words that will be translated into gifs, "weak words" that will not be translated, and punctuation 
    titleArray = masterArray[randomIndex].toLowerCase().split(" ");
  
    for (let i = 0; i < titleArray.length; i++) {
        //check for weak words and put between gifs
        for (let j = 0; j < weakWords.length; j++) {
            // if ((titleArray[i] || titleArray[i].replace(/[^\w]|_/g, "")) === weakWords[j]){
            if (titleArray[i] === undefined) respondToError();
            if ((titleArray[i].replace(/[^\w]|_/g, "")) === weakWords[j]){
                //feed into correct placeholder based on gifWords.length
                document.getElementById(`pre${ gifWords.length + 1}`).textContent += ` ${ titleArray[i] }`
                i++;
            }    
        }
      
        //check for punctuation at start and end of words and put betwen gifs, then put 
        if (i <= (titleArray.length-1)) {
            if (titleArray[i].search(/[.,:!?\(\)&']/) === 0) {
                document.getElementById(`pre${ gifWords.length + 1 }`).textContent += ` ${ titleArray[i].charAt(0) }`;
                gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ""));
            } else if (titleArray[i].search(/[.,:!?\(\)&']/) === (titleArray[i].length - 1)) {       
                gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ""));   
                document.getElementById(`pre${ gifWords.length + 1 }`).textContent += ` ${ titleArray[i].charAt(titleArray[i].length - 1) }`;  
            } else {
                gifWords.push(titleArray[i]);
            }  
        }
    }   
  
    if (gifWords === null) respondToError();
  
    for (let y = 1; y <= gifWords.length; y++) {
        if (gifWords[y] === null) respondToError();
    }
}
