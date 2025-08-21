// rock paper game

//Random Number
/* generate a random number 
rock = 0-1/3
paper = 1/3-2/3
scissor = 2/3-1 */

// Computer pick 
const randomNumber = Math.random();
let results = '';
let compMove = '';

function computerPick() {
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        compMove = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        compMove = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        compMove = 'scissor'
    }
    return compMove;
}

console.log(computerPick());

// User Pick and Move
function playerMove(userMove) {
    const compPick = computerPick();
    // user picks Rock 
    if (userMove === 'rock') {
        if (compPick === 'rock') {
            results = 'You tied'
        } else if (compPick === 'paper') {
            results = 'You loose';
        } else if (compPick === 'scissor') {
            results = 'You win';
        }
        // user picks Paper
    } else if (userMove === 'paper') {
        if (compPick === 'rock') {
            results = 'You win';
        } else if (compPick === 'paper') {
            results = 'You tied'
        } else if (compPick === 'scissor') {
            results = 'You loose'
        }
        // user picks Scissors
    } else if (userMove === 'scissor') {
        if (compPick === 'rock') {
            results = 'You loose'
        } else if (compPick === 'paper') {
            results = 'You win'
        } else if (compPick === 'scissor') {
            results = 'You tied'
        }
    }

    // Update the scores and saved it in the local storage when a game is played the score is tallied. 

    if (results === 'You win') {
        score.wins += 1;
    } else if (results === 'You loose') {
        score.losses += 1;
    } else if (results === 'You tied') {
        score.ties += 1;
    }

    //Store the stores: 
    const scoreObject = JSON.stringify(score)
    // save the score to local storage 
    localStorage.setItem('score', scoreObject);


    // update the code on the page: 
    updateScore();

    // results:
    document.querySelector('.js-results').innerHTML = results

    // the moves 
    /*You 
      <img src=".images/hand1.jpg" class="move-icon"> 
    <img src="./images/hand2.jpg" class="move-icon">
    computer*/

    
    // document.querySelector('.js-move').innerHTML = 
    // `Your Move : <img src="/images/${userMove}.jpg" class="move-icon"> 
    // <br><br>
    // Computer Move: 
    //  <img src="images/${compPick}.jpg" class="move-icon"> `

    //Original : 
    document.querySelector('.js-move').innerHTML = `Your Move : ${userMove}:<br> 
    <br>Computer Move: ${compPick} `


    





}


//Update the score: 

//Score Storage  the results/Win 

/*const score ={
    wins:0,
    ties:0,
    losses:0
};
*/
// get the scores that was saved from local storage and converted back to object using Parse 
//also give a default value 

let score = JSON.parse(localStorage.getItem('score')
) || {
    wins: 0,
    ties: 0,
    losses: 0
};

// Score board of the total wins:  
updateScore();
// update the code on the page: 

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} Losses: ${score.losses}  Ties:${score.ties}`;
 
}






