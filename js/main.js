//TEST multiple gif fetch requests (for top 5 results) running simultaneously
//PULL those gif's into existing IFRAMES
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
//Can I account for typos and still give a correct answer?
//TIMER? Modify scoring
//Sound for correct answer?


const category = document.querySelector("select");
const nextButton = document.getElementById("next");
const newButton = document.getElementById("newClue");

let firstWord = "queen"
let secondWord = "king"
let thirdWord = "jack"

let gif1

let g = 0; // variable for array index that chooses round of gif's; will need to increment with each bush of "new clues button and reset with each new round

const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${ secondWord }&limit=5&offset=0&lang=en`;


//Fetch request from giphy to provide gif for first word 
nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${requestUrl}`)
    .then((response) => {
        return response.json();
    })
    //Feed gif #one embed url into iframe #one
    .then((parsedData) => {
        console.log("======>", parsedData.data[g].embed_url);
        document.querySelector("#one").src = parsedData.data[g].embed_url;
    })
    .catch((error) => {
        console.error("ERROR: ", error)
    });
})

//new clues event listener
nextButton.addEventListener("click", (e) => {
    g >= 5 ? g = 0 : g++; 
    document.querySelector("#one").src = parsedData.data[g].embed_url;
})