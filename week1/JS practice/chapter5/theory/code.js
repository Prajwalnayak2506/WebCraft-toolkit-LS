//basic fucntion definition
function myFunc(){
    console.log("Welcome to this session by me");
    console.log("Your instructors name is Prajwal Nayak");
}
myFunc();
//parameters
let msg = "Pokemon is cool \n and i am cool too";
function printMessage(msgg){
    console.log(msgg);
}
console.log(msg); //passing msg as argument

//function to find sum of 3 numbers
function summerFunction(x,y,z){
    //x,y,z are local variables, i.e. they only exist in the fucnction and not outside it 
    console.log(x+y+z);
}
let x = 100;
let y = 300;
let z = 500;
summerFunction(x,y,z);
//return 
function sumReturner(a,b,c){
    return a+b+c;
}
let p = 5;
let q = 39;
let r = 400;
let total = sumReturner(p,q,r);
console.log(total);

//arrow functions
const sum = (a,b) => {
    return a+b;
}
console.log(sum);
console.log(sum(2,3));