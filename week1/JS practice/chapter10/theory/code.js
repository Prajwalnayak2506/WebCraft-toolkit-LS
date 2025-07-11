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
class Toyotacar {
    constructor(brand){
        console.log("creating new object");
        this.brandName = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
//to create obkects from this class:
let fortuner = new Toyotacar("fortuner");
let lexus = new Toyotacar("lexus");
//fortuner and lexus are new cars of class Toyotal car
//constructor is a special method in a class which is automatically invoked by new (i.e. whenever we create a new obj, consturcter is automatically created by default if we dont define it and it is invoked(called))
//inheritance : passing down properties and methods from parent class to child class
//that is variables and fucntions of parent can be used by child: but if parent and child have same name for a method or variable, the child variable or fucntion would be prioritized
class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent {
}
let obj = new Child();
obj.hello(); //works without error
class Person{
    constructor(){
        this.species = "homoSapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}
class Engineer extends Person{
    work(){
        console.log("build website")
    }
}
//super Keyword
//The super keyword is used to call the constructor of its parent class ot access the parent;s properties and methods.
//when we want to directly access method or constructor of parent class
class Person1{
    constructor(name){
        this.species = "homoSapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}
class Engineer1 extends Person1{
    constructor(branch,name){ //Error when we dot use super before using this in constructor : Uncaught Reference Error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        console.log("Enter child constructor")
        super(name); //this is to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor")
    }
    work(){
        super.eat(); //to call method of parent
        console.log("build website")
    }
}
let engObj = new Engineer1("chemical engg");