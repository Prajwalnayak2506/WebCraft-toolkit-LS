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