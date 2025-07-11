const student = {
    name : "prajj", //property of object
    marks : 45, //proprty of object
    printMarks: function() {
        console.log("marks =",this.marks); //method of object
        //this is a keyword
    }
}

//now consider an array
let arr = [1,2,3,4,5];
arr.push(3);
console.log(arr);
//arr is an object, and we are usign a method push onto it, but it was never deifned
//soem object have soe predeinfed functions in them which are a part of the prototype object
// if we create two objects aand y, we can use the functoins of x in y by setting the prototype of y as follows:
let x = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const y = {
    salary: 50000,
};
//to use the fucntoin calcTax in y, we can do the following:
y.__proto__ = x;

//classes in JS
//class is a template to create objects : it is a blueprint for creatnign objects : it has variables and methods defined inside it