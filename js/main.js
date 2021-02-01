
//TEST multiple gif fetch requests (for top 5 results) running simultaneously


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
//CSS CLEANUP
//REFACTOR FETCH REQUESTS INTO A SINGLE FUNCTION WITH NECESSARY PARAMETERS?
//CSS FOR MOBILE
//CASE INSENSITIVITY FOR FETCH REQUESTS and PLAYER INPUT VALUE

//TOGGLE CLASS NEW CLUE BUTTON TO MAKE INVISIBLE OR REMOVE -- rather than  making g=0?
//Can I account for typos and still give a correct answer? [maybe use an || condition to run the same eliminateWords function on player guess and give as corret if that matches to source file]

//TIMER? Modify scoring
//Sound for correct answer? Funny gif to make fun of player if they get the wrong answer and celebratory gif if right.
//Avoid repeats in same game? by modifying all arrays (in which case i'd need to reset each new player) or better solution available?





//SCHEDULE:
// WED:
// Styling (start with 3 blank iframes...maybe have a different colored ? in each)

// TUE:

// Array creation and separate array storage
// Solve BenjamIN button issue
// Begin styling

//MONDAY: 
//Update new clue button to act according to title length
//Use length of title to display number of iframes. Rather than hiding, should I DOM this? 
 //Collapsible instructions (refer to pre-work)
// New Player / Reset button? [just reload website or be more sophisticated?]


//Array filtering and mapping
const moviesMasterArray = ["Adaptation", "Fight Club", "Panic Room", "Boogie Nights", "Hard Day's Night", "Fantastic Mr. Fox", "Muppets Take Manhattan", "Being John Malkovich", "The Unbearable Lightness Of Being", "No Country For Old Men", "There Will Be Blood", "Die Hard With A Vengeance","Monty Python and the Quest for the Holy Grail"];

//const countWords = (rawTitle) => {return rawTitle.split(" ").length >= 3}; //THIS WAS AN INITIAL CONSTRAINT FOR TESTING
//const moviesMasterArray = moviesRawArray.filter(countWords);  //THIS WAS AN INITIAL CONSTRAINT FOR TESTING
const eliminateWords = (masterTitle) => {return masterTitle.replace(/a |an |are |in |is |of |the /gi, "")};
const moviesSourceArray = moviesMasterArray.map(eliminateWords);

//Buttons DOM
const category = document.querySelector("select");
const nextButton = document.getElementById("next");
const newClueButton = document.getElementById("newClue");
const answerForm = document.getElementById("answ");
const nextRoundForm = document.getElementById("nextRoundForm");
const answerButton = document.getElementById("answerButton");
const answerInput = document.getElementById("answer");
const isPlayerCorrect = document.getElementById("is-player-correct");

//Variable declarations
let randomMovieIndex, firstWord, secondWord, thirdWord, fourthWord, requestFirstUrl, requestSecondUrl, requestThirdUrl, gif1Array, gif2Array, gif3Array, gif4array, guess
let g = 0; // variable for array index that chooses round of gif's; will need to increment with each Push of "new clues button and reset with each new round
let pScore = 0;
let titleLength = 0;

//Functions
const getTitle = () => {
    randomMovieIndex = Math.floor(Math.random() * moviesSourceArray.length)
    console.log(moviesSourceArray[randomMovieIndex]) // shows the mapped title
    //splits mapped title into individual words
    titleLength = moviesSourceArray[randomMovieIndex].split(" ").length;
    console.log(titleLength);
}

// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class','scoreContainer')
document.body.appendChild(scoreContainer);

// Create Player Score
let playerScore = document.createElement('div');
playerScore.setAttribute('class','playerScore');
playerScore.innerHTML=`Player: ${ pScore }`;
scoreContainer.appendChild(playerScore);

isPlayerCorrect.classList.toggle("hide"); 


//Launches next round of play
nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    nextButton.value = "Let's Play Another Round!"
    answerForm.classList.toggle("hide");
    newClueButton.classList.toggle("hide");
    isPlayerCorrect.classList.toggle("hide");  
    nextRoundForm.classList.toggle("hide");
    //Chooses random title
    getTitle();
    //If title length is too short / too long, pick another movie
    while (titleLength < 2 || titleLength > 4) {
        getTitle();
    }
    
    //For two words, hide 3rd iframe and spread out the first two
    //For four words, toggle class "giphy-embed" and condense all of them


    firstWord = moviesSourceArray[randomMovieIndex].split(" ")[0];
    requestFirstUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ firstWord }&limit=5&offset=0&lang=en`
    //Fetch request from giphy to provide gif for 1st word 
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

    secondWord = moviesSourceArray[randomMovieIndex].split(" ")[1];
    requestSecondUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ secondWord }&limit=5&offset=0&lang=en`
    //Fetch request from giphy to provide gif for 2nd word 
    fetch(`${ requestSecondUrl }`)
    .then((response) => {
        return response.json();
    })
    //Feed gif #two embed url into iframe #two
    .then((parsedData) => {
        gif2Array = parsedData.data;
        document.querySelector("#two").src = gif2Array[g].embed_url; 
    })
    .catch((error) => {
        console.error("ERROR: ", error)
    });
    
    if (titleLength >= 3) {
        document.querySelector("#three").classList.remove("hide");
        thirdWord = moviesSourceArray[randomMovieIndex].split(" ")[2];
        requestThirdUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ thirdWord }&limit=5&offset=0&lang=en`
        //Fetch request from giphy to provide gif for 3rd word 
        fetch(`${ requestThirdUrl }`)
        .then((response) => {
            return response.json();
        })
        //Feed gif #three embed url into iframe #three
        .then((parsedData) => {
            gif3Array = parsedData.data;
            document.querySelector("#three").src = gif3Array[g].embed_url;
        })
        .catch((error) => {
            console.error("ERROR: ", error)
        });
    } else { 
        document.querySelector("#three").classList.add("hide");
        document.querySelector("#three").src = "";
        thirdWord = "" 
    }    

    if (titleLength === 4) {
        document.querySelector("#four").classList.remove("hide");
        document.querySelector("#four").classList.add("giphy-embed");
        fourthWord = moviesSourceArray[randomMovieIndex].split(" ")[3];
        requestFourthUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ fourthWord }&limit=5&offset=0&lang=en`
        //Fetch request from giphy to provide gif for 3rd word 
        fetch(`${ requestFourthUrl }`)
        .then((response) => {
            return response.json();
        })
        //Feed gif #three embed url into iframe #three
        .then((parsedData) => {
            gif4Array = parsedData.data;
            document.querySelector("#four").src = gif4Array[g].embed_url;
        })
        .catch((error) => {
            console.error("ERROR: ", error)
        });
    } else { 
        document.querySelector("#four").classList.remove("giphy-embed");
        document.querySelector("#four").classList.add("hide");
        document.querySelector("#four").src = "";
        fourthWord = "" 
    }    
})

//new clues event listener
newClueButton.addEventListener("click", (e) => {
    g >= 4 ? g = 0 : g++; 
    document.querySelector("#one").src = gif1Array[g].embed_url;
    document.querySelector("#two").src = gif2Array[g].embed_url;
    document.querySelector("#three").src = gif3Array[g].embed_url;
})

//DOES INPUT VALUE MATCH THE MASTER ARRAY INDEX?
answerButton.addEventListener("click", (e) => {
    e.preventDefault();
    guess = answerInput.value;
    answerInput.value = ""          //clear input
    answerForm.classList.toggle("hide");
    newClueButton.classList.toggle("hide");
    isPlayerCorrect.classList.toggle("hide");  
    nextRoundForm.classList.toggle("hide");
    //WRITE IF STATEMENT TO MATCH ANSWER (case insensitive), DISPLAY CORRECT/INCORRECT + NEXT ROUND BUTTON, AND INCREASE SCORE IF CORRECT
    if(guess.toLowerCase() === moviesMasterArray[randomMovieIndex].toLowerCase()) { //ADD CASE INSENSITIVITY!
        //console.log("Correct! You earned 100 points, redeemable for food rations in a future dystopian hellscape.");
        isPlayerCorrect.textContent = "Correct! You earned 100 points, redeemable for food rations in a future dystopian hellscape."

        pScore += 100
        playerScore.innerHTML=`Your Score: ${ pScore }`;
    } else {
        //console.log(`Yeah...no. The correct answer was ${ moviesMasterArray[randomMovieIndex] }.`);
        isPlayerCorrect.textContent = `Yeah...no. The correct answer was ${ moviesMasterArray[randomMovieIndex] }.`

    }    

})



//COMPLETED:
//ARRAYS
//COMPLETE: RANDOMIZE CHOICE OF PULL FROM SOURCEARRAY

//GIFs
//COMPLETE: AUTO RESIZE or FIXED HEIGHT? -- due to embed properties in API, best to just set the same height/width for all iframes and the embedded gif will conform its largest dimension accordingly. 