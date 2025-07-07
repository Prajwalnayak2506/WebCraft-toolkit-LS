// question 1
let n = 100;
console.log("1. The even number from 1 to 100 are:")
for(let i=1;i<=n;i++){
    if(i%2==0){
        console.log(i);
    }
}

//question 2
let game_number = 25;
guess = prompt("Guess the number");
while(game_number != guess){
    guess = prompt("Guess the number");
}
alert("You guessed the right number");