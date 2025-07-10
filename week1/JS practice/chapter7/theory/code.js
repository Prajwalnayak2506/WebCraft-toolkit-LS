let div = document.querySelector("div");
let p = document.querySelector("p");
//getting attribute
let val = div.getAttribute("id");
console.log(val);
let para = p.getAttribute("id");
console.log(para);
//setting attribute
p.setAttribute("id","box");
//style
//changing styles in js
div.style.backgroundColor = "green";

//inserts elements
//2 step process : create and then add in required positions
let newButton = document.createElement("button");
newButton.innerText = "CLICK ME!";
let body = document.querySelector("body");
let n = prompt("Hello guys, ENter 2:");
if(n == 2){
    body.append(newButton); //adds button in the end of the body tag
}
else if(n==3){
    body.prepend(newButton); //adds button in starting of the body tag
}
else if(n==4){
    let paraaa = document.querySelectorAll("p");
    paraaa[1].before(newButton);
}
else{
    let paraaa = document.querySelectorAll("p");
    paraaa[0].after(newButton);    
}
let n1 = prompt("Hello guys, ENter 5:");
if(n1==5){
    let paraaa = document.querySelectorAll("p");
    paraaa[0].remove();
}