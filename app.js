//GETTING THE ELEMENTS IN THE DOCUMENT
let choices = document.querySelectorAll(".image");
let finaldescion = document.querySelector(".status");
let playerDisplayScore = document.querySelector(".user-score");
let computerDisplayScore = document.querySelector(".comp-score");
let resetButton = document.querySelector(".rst-btn");

//DECLARING GLOBAL VARIABLES
let playerScore = 0;
let compmuterScore =0;

//FUNCTION 1
const generateCompChoice = () => {

    let options = ["stone" ,"paper","Sicessor" ];
   const randIdx = Math.floor(Math.random()*3);//Math is the class and math.random generates random numbers between 0 and 1, but if we multiply
                                                //it with a number"x" , it will generate numbers from 0 to "x-1"
                                                //math.floor(x), this will convert the number"x" to its corresponding floor value
   return options[randIdx];
}

//FUNCTION 2
const findWinner = (playerChoice , computerChoice) => {

    let userWin =true;
    if(playerChoice === computerChoice) {
        //if the game will be drawn
        finaldescion.innerText = "game drawn";
    }
    else {
        if(playerChoice === "stone") {
            //computer choice can be either paper or secissor but cannot be stone 
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(playerChoice === "paper") {
            //here computer choice can be either stone or secissor
            userWin = computerChoice === "stone" ? true : false;
        } 
        else {
            //here the playerChoice will be secissor and computer choice can be either stone or paper
            userWin = computerChoice === "stone" ? false : true;
        }
    } 
    if(userWin === true) {
        //IF THE PLAYER WINS
        playerScore++;                                  //increasing the score
        finaldescion.innerText = "user Wins";           //displaying the winning status on the screen
        playerDisplayScore.innerText = playerScore;     //displaying the score on the screen
    }
    else {
        //IF THE COMPUTER WINS
        compmuterScore++;                               //increasing the score
        finaldescion.innerText = "computer Wins";       //displaying the winning status on the screen
        computerDisplayScore.innerText = compmuterScore;//displaying the score on the screen
    }
}

//MAIN 1
choices.forEach((choice) =>{

    choice.addEventListener("click" , ()=> {

        const userChoice = choice.getAttribute("id");
        const compChoice = generateCompChoice();
        findWinner(userChoice , compChoice);
    });
    
});

//MAIN 2
resetButton.addEventListener ("click" ,()=> {
    playerScore =0;
    compmuterScore =0;
    finaldescion.innerText = "New Game Started";
    playerDisplayScore.innerText = playerScore;
    computerDisplayScore.innerText = compmuterScore;
});