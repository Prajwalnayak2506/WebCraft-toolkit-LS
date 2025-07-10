let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    const userChoiceId = choice.getAttribute("Id")
    choice.addEventListener("click",()=>{
        playGame(userChoiceId);
    });
});
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
    }
    else{
        console.log("you lose");
    }
}
const drawGame =() =>{
    console.log("Draw game");
}
const genCompChoice =() => {
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}