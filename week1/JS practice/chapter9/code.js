let userScore = 0;
let compScore = 0;
let US = document.querySelector("#userScore");
let CS = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    const userChoiceId = choice.getAttribute("Id")
    choice.addEventListener("click",()=>{
        playGame(userChoiceId);
    });
});
message = "Play Your move";
const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    //generate computer choice
    let compChoice = genCompChoice();
    console.log("computer choice =",compChoice);
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
        restart();
    }
    else if(compScore === 5){
        message = "You Lose, Click to play again";
        restart();
    }
}
const restart = () => {
    userScore = 0;
    compScore = 0;
    let msg = document.querySelector("#msg");
    msg.innerText = message ;
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