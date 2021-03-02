# GIFFLES

## Deployed At:
https://skaiser33.github.io/giffles/

## Description
Giffles is a charades-style game that incorporates gifs as clues using the Giphy API. The player chooses a category (movie, song, or book) and guesses the title  based on the series of gifs that are displayed. 

Each gif represents one word of the title, and the gifs displayed will be based on a real-time API request of the most popular gifs for that word at the time of play. 

Player score will be based on how quickly players guess the correct title (with a 30 second time limit per round), and users will have the option to continue to the next round after each correct or incorrect guess.

Players may request up to four cycles of new gifs ("clues") during the round for each original gifs provided. 


## Screenshots

Landing Page
![screenshot landing](https://i.imgur.com/vJar7JF.png)

Instructions
![screenshot instructions](https://i.imgur.com/hk6mlTp.png)

During Play
![screenshot during play](https://i.imgur.com/9OGal1j.png)

Wrong Answer
![screenshot wrong answer](https://i.imgur.com/TY5NPC6.png)

Right Answer
![screenshot right answer](https://i.imgur.com/LmHi38m.png)

## Technologies Used
- Javascript
- HTML
- CSS
- AJAX
- VSCode
- Google Chrome Developer Tools

## User Stories
- As a player, I want my game to recognize correct case-insensitive answers to each Giffle.
- As a player, I would like the app to inform me when my answer is correct, tell me how many points I earned, and keep my score.
- As a player, I would like to choose a category for each round of play. 
- As a player, I would like a fun UI that is simple to understand and aesthetically pleasing.
- As a player I would like to be able to start over (as a new player).
- As a player, I would like a timer displayed with the remaining seconds in each round.
- As a player, I would like additional points based on the remaining seconds when I submit a correct answer.
- As a player, I would like to be able to choose new clues within a round. 

 
## Wireframes

Landing View (Wireframe)
![wireframe initial landing view](https://i.imgur.com/FGmj9aQ.jpg)

Results View (Wireframe)
![wireframe results view](https://i.imgur.com/Ib8n035.jpg)

## Major Hurdles
- The logistics of arranging words from title to generate gifs without "weak" words (ie: the, a, etc) or punctuation. After a "focus group", I decided that my original strategy of simply eliminating "weak" words using the replace method made it too difficult for the player to discern the title using just gifs. I ended up restructuring the functionality to a large degree using the split method followed by tests for equality of "weak" words / punctuation using replace. 
- Responsive styling depending on number of gifs
- Creating arrays from lists...had surprising difficulty creating CSV files in the proper format with comma separated values (it's in the name!) and quotes around strings
- Using global variables across multiple js files. Since this didn't impact functionality beyond a possible impact on speed, I decided to relegate this to a future goal and focus on other functionality goals.


## Future Goals
- Separate JS files for databases / title arrays
- Responsive design / mobile version / improved style features
- Fuzzy string matching for player answers with typos
- Incorporate sounds for correct answers
- Competitive online play between users facing the same "giffle" question with player logins and score records.
