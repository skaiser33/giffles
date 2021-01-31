//TEST multiple gif fetch requests (for top 5 results) running simultaneously
//RANDOMIZE CHOICE OF PULL FROM SOURCEARRAY
//PULL those gif's into existing IFRAMES, with temporary initial restriction of exactly 3 words in moviesSourceArray with if statement in order to choose
//CREATE a button that updates each value in the fetch request to the next gif's [g++]; variable for array index that chooses round of gif's; will need to increment with each bush of "new clues button and reset with each new round 


// Create/Find arrays of movie titles, book titles, and song titles. Make sure they're in strings.
// Filter to new "MASTER" array where titles with 3-5 words
// Map MASTER arrays to SOURCE arrays that remove any strings "in, of, the, a, an, is, are" etc. Indices between MASTER and SOURCE arrays must match.

// Append/Remove # of iframes based on # of words in SOURCE string [i]
// Send a fetch request for each word in the SOURCE string [i] and fill iframes 

//Change in category value reloads and sends request from selected array

//Input value submitted by player must match MASTER[i]
//Announce correct/incorrect and update score (refer to high card lab, look at solutions branch and not just my own)
//For incorrect, also display the correct answer with toggleClass on <p> with id #correctAnswer


 
//Toggle class for next round button to make invisible
//Are all titles the same length or can I count the number of words in the title using the spaces in between? Beware of A/The/Of
// Favicon!
 //Collapsible instructions (refer to pre-work)
//HOW WILL GIF SIZING WORK?
//CSS CLEANUP
//REFACTOR FETCH REQUESTS INTO A SINGLE FUNCTION WITH NECESSARY PARAMETERS?
//CSS FOR MOBILE
//CASE INSENSITIVITY FOR FETCH REQUESTS and PLAYER INPUT VALUE
// New Player / Reset button?
//TOGGLE CLASS NEW CLUE BUTTON TO MAKE INVISIBLE OR REMOVE -- rather than  making g=0?
//Can I account for typos and still give a correct answer?
//TIMER? Modify scoring
//Sound for correct answer?

//Array filtering and mapping
const moviesRawArray = ["Hard Day's Night", "Fantastic Mr. Fox", "Muppets Take Manhattan", "Being John Malkovich", "Fight Club", "The Unbearable Lightness Of Being"];
const countWords = (rawTitle) => {return rawTitle.split(" ").length >= 3};
const moviesMasterArray = moviesRawArray.filter(countWords);
const eliminateWords = (masterTitle) => {return masterTitle.replace(/a |an |are |in |is |of |the /gi, "")};
const moviesSourceArray = moviesMasterArray.map(eliminateWords);

//Buttons DOM
const category = document.querySelector("select");
const nextButton = document.getElementById("next");
const newClueButton = document.getElementById("newClue");

//Variable declarations
let randomMovieIndex, firstWord, secondWord, thirdWord, requestFirstUrl, gif1Array
let g = 0; // TO-DO variable for array index that chooses round of gif's; will need to increment with each Push of "new clues button and reset with each new round

//Launches next round of play
nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    //Chooses random title
    randomMovieIndex = Math.floor(Math.random() * moviesSourceArray.length)
    console.log(moviesSourceArray[randomMovieIndex]) // shows the mapped title
    //splits mapped title into individual words
    firstWord = moviesSourceArray[randomMovieIndex].split(" ")[0];
    secondWord = moviesSourceArray[randomMovieIndex].split(" ")[1];
    thirdWord = moviesSourceArray[randomMovieIndex].split(" ")[2];
    requestFirstUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ firstWord }&limit=5&offset=0&lang=en`
    //Fetch request from giphy to provide gif for first word 
    fetch(`${ requestFirstUrl }`)
    .then((response) => {
        return response.json();
    })
    //Feed gif #one embed url into iframe #one
    .then((parsedData) => {
        gif1Array = parsedData.data;
        document.querySelector("#one").src = gif1Array[g].embed_url;
    })
    .catch((error) => {
        console.error("ERROR: ", error)
    });
})

//new clues event listener
newClueButton.addEventListener("click", (e) => {
    g >= 4 ? g = 0 : g++; 
    document.querySelector("#one").src = gif1Array[g].embed_url;
})