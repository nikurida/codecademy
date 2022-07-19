let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum;
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let humanResult = Math.abs(humanGuess - secretTarget);
    let computerResult =  Math.abs(computerGuess - secretTarget);
    if ((computerResult > humanResult) || (computerResult === humanResult)){
        return true;
    }else{
        return false;
    }
}

const updateScore = winner => {
    if (winner){
        humanScore++;
        return 'human';
    }else {
        computerScore++;
        return 'computer';
    }
}

const advanceRound = () => {
    currentRoundNumber++;
    return currentRoundNumber;
}