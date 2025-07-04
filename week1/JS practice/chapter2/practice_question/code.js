//question 1
let input = prompt("Enter a number:");
if(input%5===0){
    console.log(input, "is a multiple of 5");
}else{
    console.log(input ,"is not a multiple of 5");
}
//question 2
let score = prompt("Enter your score");
if(score<=100 && score>=90){
    console.log("grade is A");
} else if(score<=89 && score>=70){
    console.log("grade is B");
} else if(score<=69 && score>=60){
    console.log("grade is C");
} else if(score<=59 && score>=50){
    console.log("grade is D");
} else{
    console.log("grade is F")
}