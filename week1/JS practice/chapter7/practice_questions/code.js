//question 1
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color= "white";
let body = document.querySelector("body");
body.append(newBtn);

//question 2
let para = document.querySelector(".content");
para.setAttribute("class","pookie");//when we do this, the whole styling of the previous class is revomved and the new class stylign is added
//but if we do not want the previous design to be overwritten then we use classList
let para1 = document.querySelector(".contentsss");
para1.classList.add("pookie");//adds attributes of both, if there is a clash, then the later added class is prioirtized
para1.classList.remove("contentsss");//removes class
