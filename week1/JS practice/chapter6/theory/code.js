console.log(window);//window object
console.log(document);//to print the object
console.dir(document);//to print the properites and mehtods related to the object
console.log(document.body.childNodes[1]);//print first node in body
document.body.childNodes[1].innerText = "picsssssss"; //changes text in h1 in the page
//getting element by id
let heading = document.getElementById("heading");
console.log(heading);
let pk = document.getElementsByClassName("pk");
console.log(pk);
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
let elements = document.querySelector("p");
console.dir(elements);
let elementsAll = document.querySelectorAll("p");
console.dir(elementsAll);