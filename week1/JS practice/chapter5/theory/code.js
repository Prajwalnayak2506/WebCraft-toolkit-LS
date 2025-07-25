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

//forEach loop in arrays
let arr = [1,2,3,4,5];
arr.forEach(function pritVal(val){ //each element in arr will be sent to function
    console.log(val);
});
//same thing as arrow function
arr.forEach((value,i) => { //first parameter is value, second is index, third value is the array itself
    console.log(value,i);
});
//some more array methods
arrCube = arr.map((val) => { //map
    return val**3;
});
console.log(arrCube);
arrEven = arrCube.filter((val) => { //filter
    return val%2===0;
});
console.log(arrEven);
let arr11 = [1,2,3,4];
const output = arr11.reduce((acc,currVal)=>{ //reduce to find sum
    return acc+currVal;
});
console.log(output);
let arrayForMax = [1,33,45,53,375,46,67]; 
const max = arrayForMax.reduce((prev, curr) =>{ //reduce to find maximum value in the array
    return (curr>prev)?curr:prev;
});
console.log(max);