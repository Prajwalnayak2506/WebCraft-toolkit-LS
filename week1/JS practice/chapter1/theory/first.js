// This code is for printing soemthing
console.log("Prajwal is amazing");
console.log("prajwal learning JS");
// This is VS Code, but how to make it seee on browser?????
// for that we need a html file

// defining variables
name = "Prajwal Nayak"; //string
age = 21; // number value
console.log(name, "is", age, "years old."); //printing
x = null; //null type
isFollow  = false; //boolean


//let, var, const
var num = 14; //all allowed; global score
let numm = 13; // no redeclare but can update; local scope
const coools = 15; //on redeclare no update' local scope

// datatype
console.log(typeof name); //shows as string
console.log(typeof x); //shows data type as object but is considered primitive
let y = BigInt("123");
let z = Symbol("Helllooo!!")
console.log("this is", y,"and its data type is", typeof y); //shows as string
console.log("this is", z,"and its data type is", typeof z); //shows as string
//object 
let student ={
    fullName: "Pedda Pranav",
    age: 17,
    percentage: 89,
    isPass: false,
};
console.log(typeof student);
//two ways of accessing 
student["age"] = 22; 
student.isPass = true;
console.log(student["isPass"]); //here quotes
console.log(student.age); //here no quotes

