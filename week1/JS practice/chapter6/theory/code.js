console.log(window);//window object
console.log(document);//to print the object
console.dir(document);//to print the properites and mehtods related to the object
console.log(document.body.childNodes[1]);//print first node in body
document.body.childNodes[1].innerText = "picsssssss"; //changes text in h1 in the page
//getting element by id
let heading = document.getElementById("heading");
console.log(heading);
//getting element by class
let pk = document.getElementsByClassName("pk");
console.log(pk);
//getting element by tag
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
//query selector
let elements = document.querySelector("p"); //returns first elemts
console.dir(elements);
let elementsAll = document.querySelectorAll("p"); //returns all elements
console.dir(elementsAll);
//properties 
let firstElement = document.querySelector("#btn");
console.dir(firstElement);
console.log(firstElement.tagName);
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);//prints all contents of itself and all its descendants
console.log(div.innerHTML);//prints all contents of itself and all its descendants in html format
div.innerText="Pookie me \n killerboi"; //replaces content of div by the following
div.innerHTML="<b><i>Pookie me \n killerboi</i></b>"; //replaces content of div by the following
