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

//question 3
let preferredUsername = prompt("Enter your preferred username:");
let str1 = preferredUsername.trim();
let str2 = "@".concat(str1);
let len = str1.length;
alert(str2+len);

