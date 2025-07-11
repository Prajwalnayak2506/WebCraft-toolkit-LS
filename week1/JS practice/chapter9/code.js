let userScore = 0;
let compScore = 0;
let prevCompChoice;
let gameOver = false;
let US = document.querySelector("#userScore");
let CS = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    const userChoiceId = choice.getAttribute("Id")
    choice.addEventListener("click",()=>{
        playGame(userChoiceId);
    });
});
let userWinNum = 0;
message = "Play Your move";
const playGame =(userChoice) =>{
    if(gameOver) return;
    console.log("user choice = ", userChoice);
    //generate computer choice
    let compChoice = genCompChoice();
    console.log("computer choice =",compChoice);
    let compChoiceId = "#"+compChoice;
    let compChoiceBack = document.querySelector(compChoiceId);
    compChoiceBack.classList.add("compChoice");
    setTimeout(() => {
        compChoiceBack.classList.remove("compChoice");
    }, 500);
    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
    showWinner(userWin);
    }
}
const showWinner = (userWin) => {
    if(userWin){
        console.log("you Win");
        userScore++;
        US.innerText = userScore;
    }
    else{
        console.log("you lose");
        compScore++;
        CS.innerText = compScore;
    }
    if(userScore === 5){
        message = "You Win, Click to play again";
        userWinNum = 1;
        gameOver = true;
        restart();
    }
    else if(compScore === 5){
        message = "You Lose, Click to play again";
        userWinNum = 0;
        gameOver = true;
        restart();
    }
}
const restart = () => {
    let msg = document.querySelector("#msg");
    msg.innerText = message ;
    msg.style.cursor = "pointer";
    if (userWinNum === 1){
        msg.style.backgroundColor = "green";
    }else{
        msg.style.backgroundColor = "red";
    }
    userWinNum = 0;
    console.log(message);  
}
const drawGame =() =>{
    console.log("Draw game");
}
const genCompChoice =() => {
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}
let msg = document.querySelector("#msg");
msg.addEventListener("click", () => {
    if (!gameOver) return;
    // Reset game
    userScore = 0;
    compScore = 0;
    US.innerText = 0;
    CS.innerText = 0;
    message = "Play Your move";
    msg.innerText = message;
    msg.style.backgroundColor = "blue";
    msg.style.cursor = "default";
    gameOver = false;
});